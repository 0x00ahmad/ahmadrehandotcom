import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions } from "./$types";
import type { PageServerLoad } from "./$types";
import { proceedTransactionSchema } from "./schema";
import { fail } from "@sveltejs/kit";
import { transactionRepository } from "$lib/server/db/repository/transaction";
import { domainRepository } from "$lib/server/db/repository/domain";
import { DOMAIN_STATUS } from "$lib/utils/constants";

export const load = (async () => {
    const form = await superValidate(zod(proceedTransactionSchema));
    return { form, errors: undefined };
}) satisfies PageServerLoad;

export const actions = {
    completeTransaction: async ({ request, locals }) => {
        const user = locals.user;
        if (!user) {
            return fail(401, {
                errors: [{ message: "You must be logged in to complete a transaction." }]
            });
        }

        const form = await superValidate(request, zod(proceedTransactionSchema));

        if (!form.valid) {
            return fail(400, { form, errors: form.errors });
        }

        const data = form.data;

        // TODO: put checks here that indeed there is a transaction to our payment gateway

        console.log("Transaction created:", data);

        const trasnaction = await transactionRepository.createTransactions({});

        await domainRepository.changeDomainStatus(
            data.domainIds[0],
            user.id,
            DOMAIN_STATUS.PENDING
        );

        // TODO: send an email to the user

        return message(form, "Form posted successfully!");
    }
} satisfies Actions;
