import { domainRepository } from "$lib/server/db/repository/domain";
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { createDomainSchema } from "./schema";

export const load: PageServerLoad = async ({ url }) => {
    const form = await superValidate(zod(createDomainSchema));

    const pathname = url.pathname;
    const splits = pathname.split("/");

    const domain = await domainRepository.getDomainById(
        parseInt(splits[splits.length - 1])
    );

    return { form, domain, errors: undefined };
};

export const actions = {
    addDomain: async ({ request, locals }) => {
        const user = locals.user

        if (!user) {
            return fail(401, {
                errors: [{ message: "You must be logged in to add a domain." }]
            });
        }

        const form = await superValidate(request, zod(createDomainSchema));

        if (!form.valid) {
            return fail(400, { form, errors: form.errors });
        }

        const data = form.data;

        const res = await domainRepository.createDomain({
            name: data.name,
            listPrice: data.listPrice,
            acceptedPrice: data.acceptedPrice,
            expiresAt: new Date(data.expiresAt),
            sellerId: user.id,
            status: "active",
            createdAt: new Date(),
            lastModified: new Date(),
            // INFO: this will be added by the user on their own
            categories: [] as any,
        })
        if (res.errors) return { status: 400, errors: res.errors }

        return message(form, "Domain added successfully!")
    },
} satisfies Actions;

