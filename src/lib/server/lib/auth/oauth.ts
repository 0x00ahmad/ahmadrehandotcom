import type { ServerErrors } from "$lib/types";
import type { USER_TYPES } from "$lib/utils/enums";
import { Google } from "arctic";

import { AuthRepo } from "./auth.model";

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

const googleClientId = "googleClientId";
const googleClientSecret = "googleClientSecret";
const googleRedirectUri = "googleRedirectUri";

export const googleProvider = new Google(googleClientId, googleClientSecret, googleRedirectUri);


