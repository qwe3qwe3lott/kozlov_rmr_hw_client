import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { KittyDTO } from './KittyDTO';

export const kittyApi = createApi({
	reducerPath: 'kittyApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_BACKEND_URL}/api/v1`
	}),
	endpoints: (builder) => ({
		getKitty: builder.query<KittyDTO, void>({
			query: () => ({
				url: '/kitty'
			}),
			transformResponse: (response: { data: KittyDTO }) => response.data
		})
	})
});

export const { useGetKittyQuery } = kittyApi;