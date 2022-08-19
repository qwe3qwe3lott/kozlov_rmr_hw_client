import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { render } from '@testing-library/react';
import { store } from '../store';
import { authScreenTestId } from '../../screens/AuthScreen';
import { kittyScreenTestId } from '../../screens/KittyScreen';
import { App } from './App';

describe('App', () => {
	const renderApp = (initialPath: string = '/') =>
		render(
			<MemoryRouter initialEntries={[initialPath]}>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>
		);

	test('auto redirect from unknown page to kitty page', async () => {
		renderApp('/123');

		await screen.findByText(/loading kitty page.../i);
	});

	test('auto redirect from kitty screen to auth screen', async () => {
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

		renderApp('/');

		await screen.findByTestId(authScreenTestId);
	});

	test('auto redirect from auth screen to kitty screen', async () => {
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

		renderApp('/auth');

		await screen.findByTestId(kittyScreenTestId);
	});
});
