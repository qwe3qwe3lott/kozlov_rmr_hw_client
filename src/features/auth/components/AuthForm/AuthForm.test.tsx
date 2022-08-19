import '@testing-library/jest-dom';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { store } from '../../../../infrastructure/store';
import { AuthForm } from './AuthForm';
import {
	emailOptions,
	passwordOptions,
	phoneOptions
} from './inputValidationOptions';
import {
	authFormTestId,
	emailInputTestId,
	passwordInputTestId,
	phoneInputTestId,
	submitButtonTestId
} from './';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate
}));

describe('AuthForm', () => {
	const renderForm = () =>
		render(
			<MemoryRouter initialEntries={['/auth']}>
				<Provider store={store}>
					<AuthForm />
				</Provider>
			</MemoryRouter>
		);

	test('check elements', async () => {
		renderForm();

		const authForm = await screen.findByTestId(authFormTestId);
		const authFormExpectation = expect(authForm);
		authFormExpectation.toBeInstanceOf(HTMLFormElement);

		const emailInput = await screen.findByTestId(emailInputTestId);
		const emailInputExpectation = expect(emailInput);
		emailInputExpectation.toBeInstanceOf(HTMLInputElement);

		const phoneInput: HTMLInputElement = await screen.findByTestId(
			phoneInputTestId
		);
		const phoneInputExpectation = expect(phoneInput);
		phoneInputExpectation.toBeInstanceOf(HTMLInputElement);

		const passwordInput = await screen.findByTestId(passwordInputTestId);
		const passwordInputExpectation = expect(passwordInput);
		passwordInputExpectation.toBeInstanceOf(HTMLInputElement);

		const submitButton = await screen.findByTestId(submitButtonTestId);
		const submitButtonExpectation = expect(submitButton);
		submitButtonExpectation.toBeInstanceOf(HTMLInputElement);
	});

	test('required errors appear', async () => {
		renderForm();

		const emailInput = await screen.findByTestId(emailInputTestId);
		const phoneInput = await screen.findByTestId(phoneInputTestId);
		const passwordInput = await screen.findByTestId(passwordInputTestId);
		const submitButton = await screen.findByTestId(submitButtonTestId);

		await act(() => {
			fireEvent.change(emailInput, { target: { value: '' } });
			fireEvent.change(phoneInput, { target: { value: '' } });
			fireEvent.change(passwordInput, { target: { value: '' } });
			fireEvent.click(submitButton);
		});

		const emailErrorSpan = await screen.findByText(
			new RegExp(emailOptions.required, 'i')
		);
		const emailErrorSpanExpectation = expect(emailErrorSpan);
		emailErrorSpanExpectation.toBeInstanceOf(HTMLSpanElement);

		const phoneErrorSpan = await screen.findByText(
			new RegExp(phoneOptions.required, 'i')
		);
		const phoneErrorSpanExpectation = expect(phoneErrorSpan);
		phoneErrorSpanExpectation.toBeInstanceOf(HTMLSpanElement);

		const passwordErrorSpan = await screen.findByText(
			new RegExp(passwordOptions.required, 'i')
		);
		const passwordErrorSpanExpectation = expect(passwordErrorSpan);
		passwordErrorSpanExpectation.toBeInstanceOf(HTMLSpanElement);
	});

	test('unauthorized error', async () => {
		renderForm();

		const emailInput = await screen.findByTestId(emailInputTestId);
		const phoneInput = await screen.findByTestId(phoneInputTestId);
		const passwordInput = await screen.findByTestId(passwordInputTestId);
		const submitButton = await screen.findByTestId(submitButtonTestId);

		const errorMessage = 'There is no user with such credentials';
		await act(() => {
			fireEvent.change(emailInput, { target: { value: 'igor@ya.ru' } });
			fireEvent.change(phoneInput, { target: { value: '+79853421167' } });
			fireEvent.change(passwordInput, { target: { value: 'mypassword123' } });

			fetchMock.mockResponseOnce(
				`{"statusCode":401,"error":"Unauthorized","message":"${errorMessage}"}`,
				{
					status: 401,
					statusText: 'Unauthorized',
					url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/login`,
					headers: {
						'content-type': 'application/json; charset=utf-8'
					}
				}
			);

			fireEvent.click(submitButton);
		});

		const errorParagraph = await screen.findByText(
			new RegExp(errorMessage, 'i')
		);
		const errorParagraphExpectation = expect(errorParagraph);
		errorParagraphExpectation.toBeInstanceOf(HTMLParagraphElement);
	});

	test('success', async () => {
		renderForm();

		const emailInput = await screen.findByTestId(emailInputTestId);
		const phoneInput = await screen.findByTestId(phoneInputTestId);
		const passwordInput = await screen.findByTestId(passwordInputTestId);
		const submitButton = await screen.findByTestId(submitButtonTestId);

		await act(() => {
			fireEvent.change(emailInput, { target: { value: 'igor@ya.ru' } });
			fireEvent.change(phoneInput, { target: { value: '+79853421167' } });
			fireEvent.change(passwordInput, { target: { value: 'mypassword1234' } });
		});

		fetchMock.mockResponseOnce('', {
			status: 200,
			statusText: 'OK',
			url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/login`,
			headers: {
				'content-type': 'application/json; charset=utf-8'
			}
		});

		await act(() => {
			fireEvent.click(submitButton);
		});

		await waitFor(() => {
			expect(mockedUsedNavigate.mock.calls.length).toBe(1);
		});
	});
});
