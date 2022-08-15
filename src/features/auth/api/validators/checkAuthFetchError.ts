import { AuthFetchError } from '../errors/AuthFetchError';

export const checkAuthFetchError = (error: any): error is AuthFetchError => {
	if (typeof error !== 'object' || typeof error.data !== 'object') {
		return false;
	}

	const data = error.data;
	return (
		typeof data.message === 'string' &&
		typeof data.error === 'string' &&
		typeof data.statusCode === 'number'
	);
};
