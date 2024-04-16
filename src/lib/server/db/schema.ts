import { relations } from "drizzle-orm";
import {
    sqliteTable,
    integer,
    text,
} from "drizzle-orm/sqlite-core";

import { USER_TYPES } from "../../utils/constants";

export const user = sqliteTable("user", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
    lastLogin: integer("last_login", { mode: "timestamp" }).notNull(),
    username: text("username", { length: 32 }).notNull(),
    email: text("email", { length: 128 }).notNull(),
    userType: integer("user_type").notNull().default(USER_TYPES.USER),
    disabled: integer("disabled", { mode: "boolean" }).notNull().default(false),
    provider: text("provider", {
        enum: ["google", "facebook", "linkedin"],
    }).notNull(),
    providerId: text("provider_id", { length: 255 }).notNull(),
});

export const session = sqliteTable("session", {
    id: text("id").notNull().primaryKey(),
    expiresAt: integer("expires_at").notNull(),
    userId: integer("user_id").notNull().references(() => user.id),
});

export const userSessionRelation = relations(user, ({ one }) => ({
    session: one(session)
}));

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
    domains: many(domain)
}));

export const contact = sqliteTable("contact", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    firstName: text("first_name", { length: 32 }).notNull(),
    lastName: text("last_name", { length: 32 }).notNull(),
    email: text("email", { length: 128 }).notNull(),
    phoneNumber: text("phone_number", { length: 32 }).notNull(),
    message: text("message").notNull().default("")
});


export const emailList = sqliteTable('email_list', {
    email: text('email', { length: 255 }).primaryKey(),
    subscribedAt: integer('subscribed_at', { mode: "timestamp_ms" }).notNull(),
    unsubscribedAt: integer('unsubscribed_at', { mode: 'timestamp_ms' }),
    key: text('key', { length: 20 }).notNull()
});

