import '@testing-library/jest-dom';
import { act, fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../../infrastructure/store';
import { AuthForm } from './AuthForm';

describe('AuthForm', () => {
	test('errors appear', async () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<AuthForm />
				</Provider>
			</BrowserRouter>
		);

		const authForm: HTMLFormElement = await screen.findByTestId('auth-form');
		const authFormExpectation = expect(authForm);
		authFormExpectation.toBeInstanceOf(HTMLFormElement);

		const emailInput: HTMLInputElement = await screen.findByTestId(
			'auth-form__email-input'
		);
		const emailInputExpectation = expect(emailInput);
		emailInputExpectation.toBeInstanceOf(HTMLInputElement);

		const phoneInput: HTMLInputElement = await screen.findByTestId(
			'auth-form__phone-input'
		);
		const phoneInputExpectation = expect(phoneInput);
		phoneInputExpectation.toBeInstanceOf(HTMLInputElement);

		const passwordInput: HTMLInputElement = await screen.findByTestId(
			'auth-form__password-input'
		);
		const passwordInputExpectation = expect(passwordInput);
		passwordInputExpectation.toBeInstanceOf(HTMLInputElement);

		const submitButton: HTMLInputElement = await screen.findByTestId(
			'auth-form__submit-button'
		);
		const submitButtonExpectation = expect(submitButton);
		submitButtonExpectation.toBeInstanceOf(HTMLInputElement);

		emailInput.value = '';
		phoneInput.value = '';
		passwordInput.value = '';

		await act(() => {
			fireEvent.click(submitButton);
		});
		// TODO: to figure out how to check error appearing
		/*const emailErrorSpan = await screen.findByText('Enter valid email');
		const emailErrorSpanExpectation = expect(emailErrorSpan);
		emailErrorSpanExpectation.toBeInstanceOf(HTMLSpanElement);
		screen.debug();*/
	});
});
