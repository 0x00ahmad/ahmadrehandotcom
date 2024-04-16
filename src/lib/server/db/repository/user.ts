import { eq } from "drizzle-orm";

import { db } from "..";
import { user } from "../schema";
import { USER_TYPES } from "$lib/utils/enums";
import type { Result } from "$lib/types";

export const userRepository = {
    createUser: async function(
        email: string, firstName: string, lastName: string,
        provider: string, providerId: string,
        userType: number = USER_TYPES.USER,
    ) {
        type NewUserType = typeof user.$inferInsert;
        const newUser = await db.insert(user).values({
            email,
            firstName,
            lastName,
            provider,
            providerId,
            lastLogin: new Date(),
            createdAt: new Date(),
            userType,
        } as NewUserType).returning({
            id: user.id,
        });
        if (newUser.length === 0) {
            return {
                errors: [{
                    message: "Failed to create user, please try again later.",
                    field: "user",
                    type: "create",
                }],
            } as Result<NewUserType>;
        }
        return { data: newUser[0] } as Result<NewUserType>;
    },
    getUserById: async function(id: number) {
        return await db.query.user.findFirst({
            where: eq(user.id, id),
        });
    },
    getUserByEmail: async function(email: string) {
        return await db.query.user.findFirst({
            where: eq(user.email, email),
        });
    },
};
