import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import { SignInFormValues } from '../types/SignInFormValues';
import { Profile } from '../types/Profile';
import { AuthFetchError } from './errors/AuthFetchError';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_BACKEND_URL}/api/v1`
	}) as BaseQueryFn<string | FetchArgs, unknown, AuthFetchError, {}>,
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
			invalidatesTags: (result, error) => (error ? [] : ['Profile'])
		}),
		signOut: builder.mutation<void, void>({
			query: () => ({
				url: '/logout',
				method: 'POST'
			}),
			invalidatesTags: (result, error) => (error ? [] : ['Profile'])
		})
	})
});

export const { useSignInMutation, useSignOutMutation, useGetProfileQuery } =
	authApi;
export const useGetProfileQueryState =
	authApi.endpoints.getProfile.useQueryState;
