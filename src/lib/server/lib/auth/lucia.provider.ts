import { Lucia, TimeSpan } from 'lucia';
import { env } from '$env/dynamic/private';
import { HybridDrizzleAndRedisAdapter } from './adapter';
import { db } from '$lib/server/db';
import { redisClient } from '$lib/server/redis';

const adapter = new HybridDrizzleAndRedisAdapter(db, redisClient);

export const lucia = new Lucia(adapter, {
	sessionExpiresIn: new TimeSpan(2, "w"),
	sessionCookie: {
		attributes: {
			secure: env.NODE_ENV === 'production'
		}
	},
	getUserAttributes: (attrs) => {
		return {
			email: attrs.email,
			firstName: attrs.firstName,
			lastName: attrs.lastName,
		}
	},
});

// IMPORTANT!
declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		UserId: number;
		DatabaseUserAttributes: {
			firstName: string;
			lastName: string;
			email: string;
		}

	}
}
