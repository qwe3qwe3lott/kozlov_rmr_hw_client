import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignInFormValues } from '../types/SignInFormValues';
import { Profile } from '../types/Profile';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BACKEND_URL
	}),
	tagTypes: ['Profile'],
	endpoints: (builder) => ({
		getProfile: builder.query<Profile, void>({
			query: () => ({
				url: '/profile'
			}),
			transformResponse: (response: { data: Profile }) => response.data,
			providesTags: ['Profile']
		}),
		signIn: builder.mutation<void, SignInFormValues>({
			query: (formValues: SignInFormValues) => ({
				url: '/login',
				method: 'POST',
				body: formValues
			}),
			invalidatesTags: ['Profile']
		}),
		signOut: builder.mutation<void, void>({
			query: () => ({
				url: '/logout',
				method: 'POST'
			}),
			invalidatesTags: ['Profile']
		})
	})
});

export const { useSignInMutation, useSignOutMutation, useGetProfileQuery, useLazyGetProfileQuery } = authApi;