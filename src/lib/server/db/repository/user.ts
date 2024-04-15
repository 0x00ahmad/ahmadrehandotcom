import { eq } from "drizzle-orm";

import { db } from "..";
import { user } from "../schema";

export const userRepository = {
    getUserById: async function (id: number) {
        return await db.query.user.findFirst({
            where: eq(user.id, id),
        });
    },
    getUserByUsername: async function (username: string) {
        return await db.query.user.findFirst({
            where: eq(user.username, username),
        });
    },
    createUser: async function (
        username: string,
        password: string,
        email: string,
    ) {
        return await db.insert(user).values({ username, password, email });
    },
};
