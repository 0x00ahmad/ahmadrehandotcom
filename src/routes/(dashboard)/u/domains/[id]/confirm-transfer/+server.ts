import { domainRepository } from "$lib/server/db/repository/domain";
import { redirect } from "@sveltejs/kit";

import type { RequestEvent } from "@sveltejs/kit";

export async function POST(event: RequestEvent): Promise<Response> {
	const splits = event.url.pathname.split("/");
	const domainId = parseInt(splits[splits.length - 2]);

	if (!domainId || isNaN(domainId)) {
		return redirect(302, `/u`);
	}

	const user = event.locals.user;

	if (!user) {
		return new Response("You must be logged in to perform this action", {
			status: 401
		});
	}

	// TODO: here you should run a background job (instead of just confirming) that will do this and then send an email to the buyer and seller when confirmed

	await domainRepository.confirmDomainTransferFromBuyer(domainId, user.id);

	// TODO: release the payment to the seller

	return redirect(302, `/u`);
}
