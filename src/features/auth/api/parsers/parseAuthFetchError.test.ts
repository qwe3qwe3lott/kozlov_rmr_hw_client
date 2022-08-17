import { AuthFetchError } from '../errors/AuthFetchError';
import { parseAuthFetchError } from './parseAuthFetchError';

describe('parseAuthFetchError', () => {
	const authFetchErrorUnauthorized: AuthFetchError = {
		data: {
			message: 'There is no such user',
			error: 'Unauthorized!',
			statusCode: 401
		}
	};

	test('Unauthorized case', () => {
		const expectation = expect(parseAuthFetchError(authFetchErrorUnauthorized));
		expectation.toHaveLength(1);
		expectation.toEqual([authFetchErrorUnauthorized.data.message]);
	});

	const messageToDisplayBadRequest = 'Email must contain...';
	const authFetchErrorBadRequest: AuthFetchError = {
		data: {
			message: `body/${messageToDisplayBadRequest}`,
			error: 'Bad request!',
			statusCode: 400
		}
	};

	test('Bad request case', () => {
		const expectation = expect(parseAuthFetchError(authFetchErrorBadRequest));
		expectation.toHaveLength(1);
		expectation.not.toEqual([authFetchErrorUnauthorized.data.message]);
		expectation.toEqual([messageToDisplayBadRequest]);
	});

	const messageToDisplayBadRequestEmailRestriction = 'Email must contain...';
	const messageToDisplayBadRequestPhoneRestriction = 'Phone must contain...';
	const messageToDisplayBadRequestPasswordRestriction =
		'Password must contain...';
	const authFetchErrorBadRequestMultipleRestrictions: AuthFetchError = {
		data: {
			message: `body/${messageToDisplayBadRequestEmailRestriction}, body/${messageToDisplayBadRequestPhoneRestriction}, body/${messageToDisplayBadRequestPasswordRestriction}`,
			error: 'Bad request!',
			statusCode: 400
		}
	};

	test('Bad request multiple restrictions case', () => {
		const expectation = expect(
			parseAuthFetchError(authFetchErrorBadRequestMultipleRestrictions)
		);
		expectation.toHaveLength(3);
		expectation.toContainEqual(messageToDisplayBadRequestEmailRestriction);
		expectation.toContainEqual(messageToDisplayBadRequestPhoneRestriction);
		expectation.toContainEqual(messageToDisplayBadRequestPasswordRestriction);
	});
});
