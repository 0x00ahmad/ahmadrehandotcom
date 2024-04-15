import { relations } from 'drizzle-orm';
import {
    boolean,
    int,
    json,
    mysqlEnum,
    mysqlTable,
    text,
    timestamp,
    varchar
} from 'drizzle-orm/mysql-core';

import type { ProductFeatures } from '../../types';
import { USER_TYPES } from '../../utils/constants';

// INFO: more focused tables

export const user = mysqlTable('user', {
    id: int('id').autoincrement().primaryKey(),
    username: varchar('username', { length: 32 }).notNull(),
    provider: mysqlEnum('provider', ['google', '']).notNull(),
    providerId: varchar('provider_id', { length: 255 }).notNull(),
    email: varchar('email', { length: 128 }).notNull(),
    userType: int('user_type').notNull().default(USER_TYPES.USER),
    disbled: boolean('disabled').notNull().default(false)
});

// INFO: this one is for describing "Name" type in the income tax form
export const entity = mysqlTable('entity', {});

export const personalInfo = mysqlTable('personal_info', {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull(),
    firstName: varchar('first_name', { length: 32 }).notNull(),
    lastName: varchar('last_name', { length: 32 }).notNull(),
    email: varchar('email', { length: 128 }).notNull()
});

// WARNING: make sure to store the bank credentials as encrypted strings, and decrypt them when required
export const bankAccount = mysqlTable('bank_account', {});

export const attachment = mysqlTable('attachment', {});

export const address = mysqlTable('address', {});

export const incomeSource = mysqlTable('income_source', {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull(),
    name: varchar('name', { length: 128 }).notNull(),
    type: varchar('type', { length: 32 }).notNull(),
    description: text('description').notNull().default(''),
    isPrimary: boolean('is_primary').notNull().default(false)
});

export const property = mysqlTable('property', {});

export const business = mysqlTable('business', {});

// INFO: this table is going to be storing information about people related to the user,
//  such as their employer, partner, etc. which are going to be referred to while filing out the tax forms
export const relatedEntity = mysqlTable('related_entity', {});

export const filed_form_data = mysqlTable('filed_form_data', {});

// INFO: more general tables

export const contact = mysqlTable('contact', {
    id: int('id').autoincrement().primaryKey(),
    firstName: varchar('first_name', { length: 32 }).notNull(),
    lastName: varchar('last_name', { length: 32 }).notNull(),
    email: varchar('email', { length: 128 }).notNull(),
    phoneNumber: varchar('phone_number', { length: 32 }).notNull(),
    message: text('message').notNull().default('')
});
