import { googleProvider } from '$lib/server/lib/auth/oauth';
import { generateCodeVerifier, generateState } from 'arctic';
import { redirect } from '@sveltejs/kit';

import type { RequestEvent } from '@sveltejs/kit';
import { dev } from '$app/environment';

export async function GET(event: RequestEvent): Promise<Response> {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();

    const url = await googleProvider.createAuthorizationURL(state, codeVerifier, {
        scopes: ['profile', 'email', 'openid'],
    });

    event.cookies.set('state', state, {
        secure: !dev,
        sameSite: 'lax',
        path: '/',
        httpOnly: true,
        maxAge: 60 * 10 // 10 min
    });

    event.cookies.set('code_verifier', codeVerifier, {
        secure: !dev,
        sameSite: 'lax',
        path: '/',
        httpOnly: true,
        maxAge: 60 * 10 // 10 min
    });

    return redirect(302, url.toString());
}
