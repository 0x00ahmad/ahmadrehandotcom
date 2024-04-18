import { domainRepository } from "$lib/server/db/repository/domain";
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { createDomainSchema } from "./schema";

export const load: PageServerLoad = async ({ locals }) => {
    const user = locals.user
    const form = await superValidate(zod(createDomainSchema));

    // TODO: cachify these in redis in the future
    const stats = {
        domains: {
            value: 0,
        },
        sales: {
            value: 0,
            lastMonth: 0,
        },
        domainViews: {
            value: 0,
            monthlyAverage: 0,
        },
    }

    if (!user) return { stats, domains: [] }

    let domains = await domainRepository.getUsersDomains(user.id);

    stats.domains.value = domains.length;

    return { stats, domains, form, errors: undefined };
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

