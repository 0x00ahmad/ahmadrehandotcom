import type { ServerErrors } from '$lib/types';

export abstract class AuthRepo {
	abstract login(): Promise<{ success: boolean; errors: ServerErrors }>;
	abstract logout(): Promise<{ success: boolean; errors: ServerErrors }>;
}
