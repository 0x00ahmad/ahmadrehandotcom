import { lucia } from '$lib/server/lib/auth/lucia.provider';
import { fail, redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export async function GET(event: RequestEvent): Promise<Response> {
    if (!event.locals.session) {
        fail(401);
    }
    const session = event.locals.session;
    if (session) {
        lucia.invalidateSession(session.id);
        const sessionCookie = lucia.createBlankSessionCookie();
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: '.',
            ...sessionCookie.attributes
        });
    }
    return redirect(302, '/');
};

