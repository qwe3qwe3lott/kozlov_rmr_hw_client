import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '../../features/auth/api';
import { kittyApi } from '../../features/kitty/api';

export const store = configureStore({
	reducer: combineReducers({
		[authApi.reducerPath]: authApi.reducer,
		[kittyApi.reducerPath]: kittyApi.reducer
	}),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
		.concat(authApi.middleware)
		.concat(kittyApi.middleware)
});

setupListeners(store.dispatch);