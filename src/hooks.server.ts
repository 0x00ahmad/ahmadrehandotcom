import { lucia } from "$lib/server/lib/auth/lucia.provider";

import { redirect, type Handle } from "@sveltejs/kit";

// TODO: there is some cloudflare throwing issue here, fix it after done with the more important stuff


export const handle: Handle = async ({ event, resolve }) => {
    try {
        const sessionId = event.cookies.get(lucia.sessionCookieName);

        const url = new URL(event.request.url);
        const pathname = url.pathname;

        if (!sessionId) {
            event.locals.user = null;
            event.locals.session = null;
            if (pathname.startsWith("/u") || pathname.startsWith("/api")) {
                return redirect(302, "/auth/signin")
            }
            return resolve(event);
        }

        const { session, user } = await lucia.validateSession(sessionId);

        if (session && session.fresh) {
            const sessionCookie = lucia.createSessionCookie(session.id);
            event.cookies.set(sessionCookie.name, sessionCookie.value, {
                path: ".",
                ...sessionCookie.attributes
            });
        }

        if (!session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            event.cookies.set(sessionCookie.name, sessionCookie.value, {
                path: ".",
                ...sessionCookie.attributes
            });
        }

        event.locals.user = user;
        event.locals.session = session;
        return resolve(event);
    } catch (e) {
        console.error(e);
        return resolve(event);
    }
};
