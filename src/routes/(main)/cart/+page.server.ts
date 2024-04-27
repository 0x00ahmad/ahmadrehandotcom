import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions } from "./$types";
import type { PageServerLoad } from "./$types";
import { proceedTransactionSchema } from "./schema";
import { fail } from "@sveltejs/kit";
import { transactionRepository } from "$lib/server/db/repository/transaction";
import { domainRepository } from "$lib/server/db/repository/domain";
import {
	sendDomainPurchasedEmailToBuyer,
	sendDomainPurchasedEmailToSeller
} from "$lib/server/lib/email/domain.purhased.email";

export const load = (async () => {
	const form = await superValidate(zod(proceedTransactionSchema));
	return { form, errors: undefined };
}) satisfies PageServerLoad;

export const actions = {
	completeTransaction: async ({ request, locals }) => {
		const buyer = locals.user;
		if (!buyer) {
			return fail(401, {
				errors: [{ message: "You must be logged in to complete a transaction." }]
			});
		}

		const form = await superValidate(request, zod(proceedTransactionSchema));

		if (!form.valid) {
			return fail(400, { form, errors: form.errors });
		}

		const domainIds = form.data.domainIds;

		console.log("Data : ", domainIds);

		const domains = await domainRepository.getAllDomainsById(domainIds);

		const domainAndSellerIds = {} as { [key: number]: number[] };
		let totalAmount = 0;

		for (const domain of domains) {
			const sellerId = domain.sellerId;
			totalAmount += domain.listPrice;
			if (domainAndSellerIds[sellerId]) {
				domainAndSellerIds[sellerId].push(domain.id);
				continue;
			}
			domainAndSellerIds[sellerId] = [domain.id];
		}
		console.log(domains);

		console.log("Domain and Seller Ids : ", domainAndSellerIds);

		// make the transaction and change the domain status

		const transaction = await transactionRepository.createTransactions({
			currency: "USD",
			amount: totalAmount,
			buyerId: buyer.id,
			domainsIds: domainIds,
			domainAndSellerIds
		});

		console.log("Transaction : ", transaction);

		if (transaction.errors) {
			return fail(400, { form, errors: transaction.errors });
		}

		const chRes = await domainRepository.moveDomainToPendingForTransferState(
			buyer.id,
			// @ts-ignore
			domains
		);

		console.log("Response : ", chRes);

		if (chRes.errors) {
			return fail(400, { form, errors: chRes.errors });
		}

		// send an email to the user

		// const testsendto = ["delivered@resend.dev"]; // TODO: make this our email in prod
		// const allDomainNames = [] as string[];
		// for (const sellerId of Object.keys(domainAndSellerIds)) {
		// 	const domainNamesOfSeller = [];
		// 	for (const domain of domains) {
		// 		if (domain.sellerId === parseInt(sellerId)) {
		// 			domainNamesOfSeller.push(domain.name);
		// 		}
		// 	}
		// 	await sendDomainPurchasedEmailToSeller(testsendto, domainNamesOfSeller);
		// }
		// await sendDomainPurchasedEmailToBuyer(testsendto, allDomainNames);

		return message(form, "Form posted successfully!");
	}
} satisfies Actions;
