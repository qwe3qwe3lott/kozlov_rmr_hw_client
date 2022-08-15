import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetProfileQuery } from '../api';

export const withAuth =
	(ReactFC: React.FC): React.FC =>
	() => {
		const { isSuccess, isError } = useGetProfileQuery();
		if (isError) {
			return <Navigate to={'/withAuth'} replace />;
		}
		return isSuccess ? <ReactFC /> : null;
	};
