export type ServerError = {
    message: string;
    field: string;
    type: string;
};

export type ServerErrors = Array<ServerError>;

