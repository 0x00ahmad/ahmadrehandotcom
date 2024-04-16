import { Facebook, Google } from "arctic";

import { AuthRepo } from "./auth.model";
import { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET, FACEBOOK_REDIRECT_URI, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } from "$env/static/private";

export class OAuthRepo extends AuthRepo {
    provider: string;
    providerId: string;
    providerSecret: string;
    providerRedirectUri: string;

    constructor(
        provider: string,
        providerId: string,
        providerSecret: string,
        providerRedirectUri: string
    ) {
        super();
        this.provider = provider;
        this.providerId = providerId;
        this.providerSecret = providerSecret;
        this.providerRedirectUri = providerRedirectUri;
    }

    async login() {
        throw new Error("Method not implemented");
        return { success: true, errors: [] };
    }

    async logout() {
        throw new Error("Method not implemented");
        return { success: true, errors: [] };
    }
}


//
// TODO: abstractificate this
//
const googleClientId = GOOGLE_CLIENT_ID;
const googleClientSecret = GOOGLE_CLIENT_SECRET;
const googleRedirectUri = GOOGLE_REDIRECT_URI;

export const googleProvider = new Google(googleClientId, googleClientSecret, googleRedirectUri);

const facebookClientId = FACEBOOK_CLIENT_ID;
const facebookClientSecret = FACEBOOK_CLIENT_SECRET;
const facebookRedirectUri = FACEBOOK_REDIRECT_URI;

export const facebookProvider = new Facebook(facebookClientId, facebookClientSecret, facebookRedirectUri);


export class GoogleOAuthProvider extends OAuthRepo {
    constructor() {
        super("google", googleClientId, googleClientSecret, googleRedirectUri);
    }

    async createAuthorizationURL(state: string, codeVerifier: string, options: any) {
        return;
    }

    async validateAuthorizationCode(code: string, codeVerifier: string) {
        return;
    }
}

