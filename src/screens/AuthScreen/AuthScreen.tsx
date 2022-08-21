import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthForm } from '../../features/auth/components/AuthForm';
import { useGetProfileQueryState } from '../../features/auth/api';
import styles from './AuthScreen.module.scss';
import { authScreenTestId } from './';

const AuthScreen: React.FC = () => {
	const { isFetching, isSuccess } = useGetProfileQueryState();

	if (!isFetching && isSuccess) {
		return <Navigate to={'/'} replace />;
	}

	return (
		<section data-testid={authScreenTestId} className={styles.layout}>
			<AuthForm />
		</section>
	);
};

export default AuthScreen;
