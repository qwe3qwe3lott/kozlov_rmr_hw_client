import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { screen } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';
import { store } from '../../../../infrastructure/store';
import { authApi } from '../../api';
import { HeaderAuthBar } from './HeaderAuthBar';
import { authBarTestId } from './index';

describe('HeaderAuthBar', () => {
	const renderHeaderAuthBar = () =>
		render(
			<MemoryRouter initialEntries={['/']}>
				<Provider store={store}>
					<HeaderAuthBar />
				</Provider>
			</MemoryRouter>
		);

	beforeEach(() => {
		store.dispatch(authApi.util.resetApiState());
	});

	afterEach(() => {
		store.dispatch(authApi.util.resetApiState());
	});

	test('name display', async () => {
		const name = 'Игорь';
		fetchMock.mockResponseOnce(
			`{"data":{"id":"2","name":"${name}","email":"igor@ya.ru","phone":"+79853421167"}}`,
			{
				status: 200,
				statusText: 'OK',
				url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/profile`,
				headers: {
					'content-type': 'application/json; charset=utf-8'
				}
			}
		);

		renderHeaderAuthBar();

		await screen.findByText(new RegExp(name, 'i'));
	});

	test('logout', async () => {
		fetchMock.mockResponseOnce(
			'{"data":{"id":"2","name":"Игорь","email":"igor@ya.ru","phone":"+79853421167"}}',
			{
				status: 200,
				statusText: 'OK',
				url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/profile`,
				headers: {
					'content-type': 'application/json; charset=utf-8'
				}
			}
		);

		renderHeaderAuthBar();

		const logoutButton = await screen.findByText(/sign out/i);
		expect(logoutButton).toBeInstanceOf(HTMLButtonElement);

		await act(() => {
			fetchMock.mockResponseOnce('{"status":"OK!"}', {
				status: 200,
				statusText: 'OK',
				url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/logout`,
				headers: {
					'content-type': 'application/json; charset=utf-8'
				}
			});

			fetchMock.mockResponseOnce(
				'{"statusCode":403,"error":"Forbidden","message":"You need to log in"}',
				{
					status: 403,
					statusText: 'Forbidden',
					url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/profile`,
					headers: {
						'content-type': 'application/json; charset=utf-8'
					}
				}
			);

			fireEvent.click(logoutButton);
		});

		const authBar = await screen.queryByTestId(authBarTestId);

		expect(authBar).not.toBeInTheDocument();
	});
});
