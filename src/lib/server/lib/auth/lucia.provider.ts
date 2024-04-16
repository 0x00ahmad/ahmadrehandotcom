import { db } from '$lib/server/db';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { Lucia } from 'lucia';
import { session, user } from '$lib/server/db/schema';
import { env } from '$env/dynamic/private';

const adapter = new DrizzleSQLiteAdapter(db, session, user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: env.NODE_ENV === 'production'
		}
	},
	getUserAttributes: (attrs) => {
		return {
			email: attrs.email,
			username: attrs.username,
			firstName: attrs.firstName,
			lastName: attrs.lastName,
		}
	}
});

// IMPORTANT!
declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		UserId: number;
		DatabaseUserAttributes: {
			firstName: string;
			lastName: string;
			username: string;
			email: string;
		}

	}
}
