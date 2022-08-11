import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '../../features/auth/api';

export const store = configureStore({
	reducer: combineReducers({
		[authApi.reducerPath]: authApi.reducer
	}),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});

setupListeners(store.dispatch);