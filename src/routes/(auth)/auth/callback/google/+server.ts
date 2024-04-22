import { lucia } from '$lib/server/lib/auth/lucia.provider';
import { googleProvider } from '$lib/server/lib/auth/oauth';
import { OAuth2RequestError } from 'arctic';
import type { RequestEvent } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { and, eq } from 'drizzle-orm';
import { OAUTH_PROVIDERS } from '$lib/utils/constants';
import { userRepository } from '$lib/server/db/repository/user';
import type { Cookie } from 'lucia';

type GoogleUser = {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
};

export async function GET(event: RequestEvent): Promise<Response> {
    const code = event.url.searchParams.get('code');
    const state = event.url.searchParams.get('state');

    const storedState = event.cookies.get('state');
    const storedCodeVerifier = event.cookies.get('code_verifier');

    if (!code || !storedState || !storedCodeVerifier || state !== storedState) {
        throw new Error('Invalid request');
    }

    if (!code || !storedState || !storedCodeVerifier || state !== storedState) {
        throw new Error('Invalid request');
    }

    const sessionCookiePath = '/'

    try {
        const tokens = await googleProvider.validateAuthorizationCode(code, storedCodeVerifier);
        const response = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
            headers: { Authorization: `Bearer ${tokens.accessToken}` }
        });
        const googleUser = (await response.json()) as GoogleUser;

        const doesUserExist = await db.query.user.findFirst({
            where: and(eq(user.provider, OAUTH_PROVIDERS.GOOGLE), eq(user.providerId, googleUser.sub))
        });

        let sessionCookie: Cookie;
        if (doesUserExist) {
            console.log("the user exists, returning a new session")
            const session = await lucia.createSession(doesUserExist.id, {});
            sessionCookie = lucia.createSessionCookie(session.id);
        } else {
            console.log("the user does not exist, creating a new user")
            const newUser = await userRepository.createUser(
                googleUser.email,
                googleUser.given_name,
                googleUser.family_name,
                OAUTH_PROVIDERS.GOOGLE,
                googleUser.sub
            );
            console.log(newUser)
            if (!!newUser.errors) {
                throw new Error('Failed to create user, please try again later.');
            }
            const session = await lucia.createSession(newUser.data.id!, {});
            sessionCookie = lucia.createSessionCookie(session.id);
        }
        console.log(sessionCookie)

        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: sessionCookiePath,
            ...sessionCookie.attributes
        });
        return new Response(null, {
            status: 302,
            headers: { Location: '/u' }
        });
    } catch (e) {
        console.error(e)
        if (e instanceof OAuth2RequestError) {
            return new Response(null, { status: 400 });
        }
        return new Response(null, { status: 500 });
    }
}

