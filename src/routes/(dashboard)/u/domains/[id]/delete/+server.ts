import { domainRepository } from '$lib/server/db/repository/domain';
import { redirect } from '@sveltejs/kit';

import type { RequestEvent } from '@sveltejs/kit';

export async function POST(event: RequestEvent): Promise<Response> {

    const splits = event.url.pathname.split('/');
    const domainId = parseInt(splits[splits.length - 2]);

    if (!domainId || isNaN(domainId)) {
        return redirect(302, `/u`);
    }

    const user = event.locals.user;

    if (!user) {
        return new Response(
            "You must be logged in to delete a domain.",
            { status: 401 }
        )
    }

    await domainRepository.softDeleteDomain(domainId, user.id);

    return redirect(302, `/u`);
}
