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
	const domainId = parseInt(splits[splits.length - 1]);

	const domain = await domainRepository.getDomainById(domainId);

	return { form, domainId, domain, errors: undefined };
};

export const actions = {
	default: async ({ request, locals }) => {
		const user = locals.user;
		const domainId = parseInt(request.url.split("/").pop()!);

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

		const out = await domainRepository.deactivateDomainIfTransferCodeInvalid(
			domainId,
			user.id,
			data.status,
			data.transferCode
		);

		if (out?.errors || !out.data) {
			return fail(400, {
				form,
				errors: out.errors ?? [
					{ message: "Cannot activate domain without transfer code" }
				]
			});
		}

		const res = await domainRepository.saveChanges(
			domainId,
			user.id,
			data.listPrice,
			data.acceptedPrice,
			new Date(data.expiresAt),
			data.transferCode,
			data.status
		);
		if (res.errors) return { status: 400, errors: res.errors, form };

		return message(form, "Domain added successfully!");
	}
} satisfies Actions;
