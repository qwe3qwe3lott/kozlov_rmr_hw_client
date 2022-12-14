import { AuthFetchError } from '../errors/AuthFetchError';

export const parseAuthFetchError = (error: AuthFetchError): string[] =>
	error.data.message
		.split(',')
		.map((errorMessage) =>
			errorMessage.substring(errorMessage.indexOf('/') + 1, errorMessage.length)
		);
