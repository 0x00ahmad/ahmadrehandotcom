import { Lucia, TimeSpan } from 'lucia';
import { HybridDrizzleAndRedisAdapter } from './adapter';
import { db } from '$lib/server/db';
import { redisClient } from '$lib/server/redis';
import { dev } from '$app/environment';

const adapter = new HybridDrizzleAndRedisAdapter(db, redisClient);

export const lucia = new Lucia(adapter, {
	sessionExpiresIn: new TimeSpan(2, "w"),
	sessionCookie: {
		attributes: { secure: !dev }
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
