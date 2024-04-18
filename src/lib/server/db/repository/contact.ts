import type { Result } from "$lib/types";
import { db } from "..";
import { contact } from "../schema";

export type CreateContact = typeof contact.$inferInsert;

export const contactRepository = {
    saveContactRequest: async function(data: CreateContact) {
        try {
            await db.insert(contact).values({
                ...data
            });
            return { data: true } as Result<boolean>;
        } catch (err) {
            return {
                errors: [{
                    message: "Failed to save contact request, please try again later.",
                    field: "contact",
                    type: "save",
                }],
            } as Result<boolean>;
        }
    },
}
