import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthForm } from '../../features/auth/components/AuthForm';
import { useLazyGetProfileQuery } from '../../features/auth/api';
import styles from './AuthScreen.module.scss';

const AuthScreen: React.FC = () => {
	const [, { isFetching, isSuccess }] = useLazyGetProfileQuery();

	if (!isFetching && isSuccess) {
		return <Navigate to={'/'} replace />;
	}

	return (
		<section className={styles.layout}>
			<AuthForm />
		</section>
	);
};

export default AuthScreen;
