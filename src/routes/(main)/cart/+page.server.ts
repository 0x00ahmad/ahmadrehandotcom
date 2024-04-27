import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions } from "./$types";
import type { PageServerLoad } from "./$types";
import { proceedTransactionSchema } from "./schema";
import { fail } from "@sveltejs/kit";
import { transactionRepository } from "$lib/server/db/repository/transaction";
import { domainRepository } from "$lib/server/db/repository/domain";
import { DOMAIN_STATUS } from "$lib/utils/constants";
import { sendEmail } from "$lib/server/lib/email/send.email";
import {
	sendDomainPurchasedEmailToBuyer,
	sendDomainPurchasedEmailToSeller
} from "$lib/server/lib/email/domain.purhased.email";
import { userRepository } from "$lib/server/db/repository/user";

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

		const data = form.data;

		console.log("Data : ", data);

		const domains = await domainRepository.getAllDomainsById(data.domainIds);

		const domainAndSellerIds = {} as { [key: number]: number[] };
		const sellersDomains = {} as { [key: number]: {}[] };
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

		// send an email to the user

		const trasnaction = await transactionRepository.createTransactions({
			currency: "USD",
			amount: totalAmount,
			buyerId: buyer.id,
			domainsIds: data.domainIds,
			domainAndSellerIds
		});

		await domainRepository.changeDomainStatus(
			data.domainIds[0],
			buyer.id,
			DOMAIN_STATUS.PENDING
		);

		// send an email to the user

		const testsendto = ["delivered@resend.dev"];
		const allDomainNames = [] as string[];

		for (const [sellerId, domainIds] of Object.entries(domainAndSellerIds)) {
			const domainNamesOfSeller = [];
			for (const domain of domains) {
				if (domain.sellerId === parseInt(sellerId)) {
					domainNamesOfSeller.push(domain.name);
				}
			}
			await sendDomainPurchasedEmailToSeller(testsendto, domainNamesOfSeller);
		}
		await sendDomainPurchasedEmailToBuyer(testsendto, allDomainNames);

		return message(form, "Form posted successfully!");
	}
} satisfies Actions;
