import { eq } from "drizzle-orm";

import { db } from "..";
import { address, user } from "../schema";
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

    getPersonalInfo: async function(userId: number) {
        const u = await db.query.user.findFirst({
            where: eq(user.id, userId),
        });
        const addr = await db.query.address.findFirst({
            where: eq(address.userId, userId),
        });

        return { ...u, ...addr }
    },

    savePersonalInfo: async function(
        userId: number,
        personalInfo: {
            firstName: string,
            lastName: string,
            phoneNumber: string,
        },
        addressInfo: {
            address1: string,
            address2: string,
            city: string,
            country: string,
            postalCode: string,
            state: string,

        }
    ) {
        try {
            await db.transaction(async (trx) => {
                await trx.update(user).set({
                    ...personalInfo,
                }).where(eq(user.id, userId));

                const doesAddressExist = await db.query.address.findFirst({
                    where: eq(address.userId, userId),
                });
                if (!doesAddressExist) {
                    await trx.insert(address).values({
                        ...addressInfo,
                        userId,
                    }).returning({
                        id: address.id,
                    });
                } else {
                    await trx.update(address).set({
                        ...addressInfo,
                    }).where(eq(address.userId, userId));
                }
            });
            return { data: true } as Result<boolean>;
        } catch (err) {
            console.error(err);
            return {
                errors: [{
                    message: "Failed to save personal info, please try again later.",
                    field: "user",
                    type: "update",
                }],
            } as Result<boolean>;
        }
    },


};
