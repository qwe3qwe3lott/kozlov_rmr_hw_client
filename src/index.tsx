import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './infrastructure/AppRouter';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './ui-library/colors.css';
import './ui-library/index.css';
import { Provider } from 'react-redux';
import { store } from './infrastructure/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<BrowserRouter>
	<Provider store={store}>
		<AppRouter/>
	</Provider>
</BrowserRouter>);
