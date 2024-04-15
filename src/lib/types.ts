export type ProductFeatures = Record<string, string>;

export type Service = {
	id: number;
	title: string;
	description: string;
	imageLinks: string[];
};

export type ServerError = {
	message: string;
	field: string;
	type: string;
};

export type ServerErrors = Array<ServerError>;
