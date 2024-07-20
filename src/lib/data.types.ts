export type Error = { message: string; error?: Error };
export type Errors = Array<Error>;
export type Result<T> = { data?: T; errors?: Errors };
