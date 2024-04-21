import { domainRepository } from "$lib/server/db/repository/domain";
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { personalInfoSchema } from "./schema";
import { userRepository } from "$lib/server/db/repository/user";

export const load: PageServerLoad = async (e) => {
    const form = await superValidate(zod(personalInfoSchema));

    const user = e.locals.user;

    if (!user) {
        return { form, errors: [{ message: "You must be logged in to view this page." }] };
    }

    const personalInfo = await userRepository.getUserById(user.id);

    return { form, personalInfo, errors: undefined };
};

export const actions = {
    savePersonalInfo: async ({ request, locals }) => {
        const user = locals.user

        if (!user) {
            return fail(401, {
                errors: [{ message: "You must be logged in to add a domain." }]
            });
        }

        const form = await superValidate(request, zod(personalInfoSchema));

        if (!form.valid) {
            return fail(400, { form, errors: form.errors });
        }

        const data = form.data;

        const res = await userRepository.savePersonalInfo(
            user.id,
            {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber,
            },
            {
                address1: data.address1,
                address2: data.address2,
                city: data.city,
                country: data.country,
                postalCode: data.postalCode,
                state: data.state,
            }
        )
        if (res.errors) return { status: 400, errors: res.errors }

        return message(form, "Domain added successfully!")
    },
} satisfies Actions;

