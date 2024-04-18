import { relations } from "drizzle-orm";
import {
    sqliteTable,
    integer,
    text,
} from "drizzle-orm/sqlite-core";

import { OAUTH_PROVIDERS, USER_TYPES } from "../../utils/constants";

export const user = sqliteTable("user", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
    lastLogin: integer("last_login", { mode: "timestamp_ms" }).notNull(),
    email: text("email", { length: 128 }).notNull(),
    firstName: text("first_name", { length: 32 }).notNull(),
    lastName: text("last_name", { length: 32 }).notNull(),
    userType: integer("user_type").notNull().default(USER_TYPES.USER),
    disabled: integer("disabled", { mode: "boolean" }).notNull().default(false),
    provider: text("provider", {
        enum: [OAUTH_PROVIDERS.GOOGLE, OAUTH_PROVIDERS.FACEBOOK, OAUTH_PROVIDERS.LINKEDIN],
    }).notNull(),
    providerId: text("provider_id", { length: 255 }).notNull(),
});

export const address = sqliteTable("address", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    userId: integer("user_id", { mode: "number" }).notNull(),
    address1: text("address1", { length: 255 }).notNull(),
    address2: text("address2", { length: 255 }),
    city: text("city", { length: 64 }).notNull(),
    country: text("country", { length: 64 }).notNull(),
    postalCode: text("postal_code", { length: 16 }).notNull(),
    state: text("state", { length: 64 }).notNull(),
});

export const userAddressRelation = relations(user, ({ one }) => ({
    address: one(address)
}));

export const domain = sqliteTable("domain", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
    lastModified: integer("last_modified", { mode: "timestamp_ms" }).notNull(),
    deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
    name: text("name", { length: 255 }).notNull(),
    listPrice: integer("list_price", { mode: "number" }).notNull(),
    acceptedPrice: integer("accepted_price", { mode: "number" }).notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    categories: text("categories", { length: 255 }).notNull(),
    sellerId: integer("seller_id", { mode: "number" }).notNull(),
    views: integer("views", { mode: "number" }).notNull().default(0),
});

export const userDomainRelation = relations(user, ({ many }) => ({
    domains: many(domain)
}));

export const transaction = sqliteTable("transaction", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
    amount: integer("amount", { mode: "number" }).notNull(),
    currency: text("currency", { length: 3 }).notNull(),
    domainId: integer("domain_id", { mode: "number" }).notNull(),
    buyerId: integer("buyer_id", { mode: "number" }).notNull(),
    sellerId: integer("seller_id", { mode: "number" }).notNull(),
    status: text("status", { length: 32 }).notNull(),
});

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

