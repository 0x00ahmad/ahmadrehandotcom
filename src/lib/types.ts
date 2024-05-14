export type ServerError = {
	message: string;
	field?: string;
	type?: string;
};

export type ServerErrors = Array<ServerError>;

export type Result<T> = {
	data?: T;
	errors?: ServerErrors;
};

export type Option = {
	id: string | number;
	label: string;
	value: string;
};

// export type Work = {
// 	title: string;
// 	description: string;
// 	image: string;
// 	baseColor: string;
// }
