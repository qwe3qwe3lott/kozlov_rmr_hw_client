export type AuthFetchError = {
	data: {
		message: string;
		statusCode: number;
		error: string;
	};
};
