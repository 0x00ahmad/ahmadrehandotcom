import { domainRepository } from "$lib/server/db/repository/domain";
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { domainInfoSchema } from "./schema";

export const load: PageServerLoad = async ({ url }) => {
    const form = await superValidate(zod(domainInfoSchema));

    const pathname = url.pathname;
    const splits = pathname.split("/");

    const domain = await domainRepository.getDomainById(
        parseInt(splits[splits.length - 1])
    );

    return { form, domain, errors: undefined };
};

export const actions = {
    saveChanges: async ({ request, locals }) => {
        const user = locals.user
        const domainId = parseInt(request.url.split("/").pop()!)

        if (!user) {
            return fail(401, {
                errors: [{ message: "You must be logged in to add a domain." }]
            });
        }

        const form = await superValidate(request, zod(domainInfoSchema));

        if (!form.valid) {
            return fail(400, { form, errors: form.errors });
        }

        const data = form.data;

        const res = await domainRepository.saveChanges(
            domainId,
            user.id,
            data.listPrice,
            data.acceptedPrice,
            new Date(data.expiresAt),
            data.status,
        )
        if (res.errors) return { status: 400, errors: res.errors }

        return message(form, "Domain added successfully!")
    },
} satisfies Actions;

