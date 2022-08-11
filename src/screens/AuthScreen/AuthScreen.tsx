import React from 'react';
import AuthForm from '../../features/auth/components/AuthForm';
import styles from './AuthScreen.module.css';

const AuthScreen: React.FC = () => {
	return <section className={styles.layout}>
		<AuthForm/>
	</section>;
};

export default AuthScreen;