import { relations } from "drizzle-orm";
import {
    sqliteTable,
    integer,
    text,
} from "drizzle-orm/sqlite-core";

import type { ProductFeatures } from "../../types";
import { USER_TYPES } from "../../utils/constants";
import { boolean } from "drizzle-orm/mysql-core";

// INFO: more focused tables

export const user = sqliteTable("user", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
    lastLogin: integer("last_login", { mode: "timestamp" }).notNull(),
    username: text("username", { length: 32 }).notNull(),
    provider: text("provider", {
        enum: ["google", "facebook"],
    }).notNull(),
    providerId: text("provider_id", { length: 255 }).notNull(),
    email: text("email", { length: 128 }).notNull(),
    userType: integer("user_type").notNull().default(USER_TYPES.USER),
    disbled: integer("disabled", { mode: "boolean" }).notNull().default(false)
});

export const domain = sqliteTable("domain", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
    name: text("name", { length: 255 }).notNull(),
    listPrice: integer("list_price", { mode: "number" }).notNull(),
    acceptedPrice: integer("accepted_price", { mode: "number" }).notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
    categories: text("categories", { length: 255 }).notNull(),
    sellerId: integer("seller_id", { mode: "number" }).notNull(),
});

export const userDomainRelation = relations(user, ({ many }) => ({
    sessions: many(domain)
}));

export const contact = sqliteTable("contact", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    firstName: text("first_name", { length: 32 }).notNull(),
    lastName: text("last_name", { length: 32 }).notNull(),
    email: text("email", { length: 128 }).notNull(),
    phoneNumber: text("phone_number", { length: 32 }).notNull(),
    message: text("message").notNull().default("")
});
