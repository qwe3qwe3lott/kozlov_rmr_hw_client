import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetProfileQuery } from '../api';

export const auth =
	(ReactFC: React.FC): React.FC =>
	() => {
		const { isSuccess, isError } = useGetProfileQuery();
		if (isError) return <Navigate to={'/auth'} replace />;
		return isSuccess ? <ReactFC /> : null;
	};
