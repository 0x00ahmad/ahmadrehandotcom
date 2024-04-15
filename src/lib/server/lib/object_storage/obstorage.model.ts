import type { ServerErrors } from '$lib/types';

export interface ObjectStorage {
	setup(): Promise<{ ok: boolean; errors: ServerErrors }>;
	list(prefix?: string): Promise<{ ok: boolean; errors: ServerErrors }>;
	get(id: string): Promise<{ ok: boolean; errors: ServerErrors }>;
	upload(file: File): Promise<{ ok: boolean; errors: ServerErrors }>;
	delete(id: string): Promise<{ ok: boolean; errors: ServerErrors }>;
}

export interface IObjectStorage {
	setup(): Promise<void>;
	list(prefix?: string): Promise<string[]>; // Assuming list returns a list of object keys
	get(key: string): Promise<Buffer>; // Assuming get returns the object as a Buffer
	upload(key: string, data: Buffer): Promise<void>;
	delete(key: string): Promise<void>;
}
