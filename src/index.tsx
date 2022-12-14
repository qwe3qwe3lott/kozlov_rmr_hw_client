import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import './ui-library/colors.scss';
import './ui-library/index.scss';
import { store } from './infrastructure/store';
import { App } from './infrastructure/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
