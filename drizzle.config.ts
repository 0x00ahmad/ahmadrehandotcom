import type { Config } from "drizzle-kit";
import "dotenv/config";

let dbUrl = "";
let authToken = "";
try {
	dbUrl = process.env.DATABASE_URL ?? "";
	authToken = process.env.DATABASE_AUTH_TOKEN ?? "";
} catch (e) {
	console.error(e);
}

export default {
	schema: "./src/lib/server/db/schema.ts",
	out: "./drizzle/migrations",
	driver: "turso",
	dbCredentials: {
		url: dbUrl,
		authToken: authToken,
	},
} satisfies Config;

