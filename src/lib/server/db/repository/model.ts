import type { Result } from "$lib/types";

// it's an object of functions with variable parameters, each function returns a result type of type T,
// where T is the return type of the function
export type Repository = Record<
    string,
    (...args: any[]) => Promise<Result<any> | Result<any[]>>
>;

