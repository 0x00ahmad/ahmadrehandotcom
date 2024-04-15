import { eq } from "drizzle-orm";

import { db } from "..";
import { contact } from "../schema";

export const contactRequestRepo = {
    getContactReqById: async function (id: number) {
        try {
            return {
                ok: await db.query.contact.findFirst({
                    where: eq(contact.id, id),
                }),
                error: undefined,
            };
        } catch (e) {
            return { ok: undefined, error: e as Error };
        }
    },
    getAllContactRequests: async function () {
        try {
            return {
                ok: await db.query.contact.findMany({}),
                error: undefined,
            };
        } catch (e) {
            return { ok: undefined, error: e as Error };
        }
    },
    createContactRequest: async function (
        firstName: string,
        lastName: string,
        email: string,
        message: string,
    ) {
        try {
            return {
                ok: await db.insert(contact).values({
                    firstName,
                    lastName,
                    email,
                    message,
                }),
                error: undefined,
            };
        } catch (e) {
            return { ok: undefined, error: e as Error };
        }
    },
};
