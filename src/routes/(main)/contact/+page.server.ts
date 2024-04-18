import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { formSchema } from './schema';
import { fail } from '@sveltejs/kit';
import { contactRepository } from '$lib/server/db/repository/contact';

export const load = (async () => {
    const form = await superValidate(zod(formSchema));
    return { form, errors: undefined };
}) satisfies PageServerLoad;

export const actions = {
    contact: async ({ request }) => {
        const form = await superValidate(request, zod(formSchema));

        if (!form.valid) {
            return fail(400, { form, errors: form.errors });
        }

        const data = form.data;

        await contactRepository.saveContactRequest({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phone ?? "",
            message: data.message,
        })

        // TODO: send an email to our team

        return message(form, 'Form posted successfully!');
    },
} satisfies Actions;
