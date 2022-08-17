import { AuthFetchError } from '../errors/AuthFetchError';
import { checkAuthFetchError } from './checkAuthFetchError';

describe('checkAuthFetchError', () => {
	const correctObject: AuthFetchError = {
		data: {
			message: 'There is no such user',
			error: 'Unauthorized!',
			statusCode: 401
		}
	};

	test('Correct object', () => {
		expect(checkAuthFetchError(correctObject)).toBe(true);
	});

	test('Empty object', () => {
		expect(checkAuthFetchError({})).toBe(false);
	});

	test('Data of correct object', () => {
		expect(checkAuthFetchError(correctObject.data)).toBe(false);
	});

	test('Not object', () => {
		expect(checkAuthFetchError(123)).toBe(false);
	});

	test('Incorrect object', () => {
		const incorrectObject: any = {
			data: {
				message: 'There is no such user',
				error: 'Unauthorized!',
				statusCode: 401
			}
		};

		delete incorrectObject.data.message;
		expect(checkAuthFetchError(incorrectObject)).toBe(false);
		incorrectObject.data.message = 'There is no such user';

		delete incorrectObject.data.error;
		expect(checkAuthFetchError(incorrectObject)).toBe(false);
		incorrectObject.data.error = 'Unauthorized!';

		delete incorrectObject.data.message;
		expect(checkAuthFetchError(incorrectObject)).toBe(false);
		incorrectObject.data.statusCode = 401;

		delete incorrectObject.data;
		expect(checkAuthFetchError(incorrectObject)).toBe(false);
	});
});
