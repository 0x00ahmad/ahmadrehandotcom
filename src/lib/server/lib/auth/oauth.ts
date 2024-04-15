import type { ServerErrors } from "$lib/types";
import type { USER_TYPES } from "$lib/utils/enums";

import { AuthRepo } from "./auth.model";

export class OAuthRepo extends AuthRepo {
    email: string;
    provider: string;
    providerId: string;
    username: string;
    userType: USER_TYPES;

    constructor(
        email: string,
        provider: string,
        providerId: string,
        username: string,
        userType: USER_TYPES,
    ) {
        super();

        this.email = email;
        this.provider = provider;
        this.providerId = providerId;
        this.username = username;
        this.userType = userType;
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
