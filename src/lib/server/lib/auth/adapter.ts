import type { DatabaseSession, DatabaseUser, UserId } from "lucia";
import { user } from "$lib/server/db/schema";
import type { Redis } from "@upstash/redis";
import { eq } from "drizzle-orm";
import type { Database } from "$lib/server/db";

interface Adapter {
	deleteExpiredSessions(): Promise<void>;
	deleteSession(sessionId: string): Promise<void>;
	deleteUserSessions(userId: UserId): Promise<void>;
	getSessionAndUser(
		sessionId: string
	): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]>;
	getUserSessions(userId: UserId): Promise<DatabaseSession[]>;
	setSession(session: DatabaseSession): Promise<void>;
	updateSessionExpiration(sessionId: string, expiresAt: Date): Promise<void>;
}


export class HybridDrizzleAndRedisAdapter implements Adapter {
	db: Database;
	redisClient: Redis;

	constructor(db: Database, redisClient: Redis) {
		this.db = db;
		this.redisClient = redisClient;

	}

	private getSessionKey(sessionId: string): string {
		return `sid--${sessionId}`;
	}

	private getUserSessionsKey(userId: UserId): string {
		return `sids--${userId}`;
	}

	async deleteExpiredSessions(): Promise<void> {
		// redis automatically expires keys
	}

	async deleteSession(sessionId: string): Promise<void> {
		await this.redisClient.del(this.getSessionKey(sessionId));
	}

	async deleteUserSessions(userId: number): Promise<void> {
		const usKey = this.getUserSessionsKey(userId)
		const usersSessions = await this.redisClient.lrange(usKey, 0, -1);
		for (const sessionId of usersSessions) {
			await this.deleteSession(sessionId);
		}
		await this.redisClient.del(usKey);
	}

	async getSessionAndUser(sessionId: string): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]> {
		const session = await this.redisClient.get(
			this.getSessionKey(sessionId)
		) as DatabaseSession | null;
		if (!session) return [session, null];

		session.expiresAt = new Date(session?.expiresAt ?? new Date());

		const u = session ? await this.db.query.user.findFirst({
			where: eq(user.id, session.userId),
		}) : null;

		if (!u) return [session, null];

		const dbUser = {
			id: u?.id,
			attributes: {
				email: u?.email,
				lastName: u?.lastName,
				firstName: u?.firstName,
			}
		} as DatabaseUser;

		return [session, dbUser];
	}

	async getUserSessions(userId: number): Promise<DatabaseSession[]> {
		const usersSessions = await this.redisClient.lrange(
			this.getUserSessionsKey(userId), 0, -1
		);
		return await this.redisClient.mget(usersSessions.map(
			(sessionId) => this.getSessionKey(sessionId)
		));
	}

	async setSession(session: DatabaseSession): Promise<void> {
		await this.redisClient.setex(
			this.getSessionKey(session.id),
			Math.floor(session.expiresAt.getTime() / 1000),
			JSON.stringify(session)
		);
	}

	async updateSessionExpiration(sessionId: string, expiresAt: Date): Promise<void> {
		await this.redisClient.expire(
			this.getSessionKey(sessionId),
			Math.floor(expiresAt.getTime() / 1000),
		);
	}
}
