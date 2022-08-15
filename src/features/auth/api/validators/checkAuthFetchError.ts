import { AuthFetchError } from '../errors/AuthFetchError';

export const checkAuthFetchError = (error: any): error is AuthFetchError => {
	if (typeof error !== 'object') return false;
	if (typeof error.data !== 'object') return false;

	const data = error.data;
	if (typeof data.message !== 'string') return false;
	if (typeof data.error !== 'string') return false;
	if (typeof data.statusCode !== 'number') return false;

	return true;
};
