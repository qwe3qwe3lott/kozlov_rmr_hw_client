import React from 'react';
import AuthForm from '../../features/auth/components/AuthForm';
import styles from './AuthScreen.module.css';
import { useGetProfileQueryState } from '../../features/auth/api';
import { Navigate } from 'react-router-dom';

const AuthScreen: React.FC = () => {
	const { isFetching, isSuccess } = useGetProfileQueryState();
	if (!isFetching && isSuccess) return <Navigate to={'/'} replace/>;
	return <section className={styles.layout}>
		<AuthForm/>
	</section>;
};

export default AuthScreen;