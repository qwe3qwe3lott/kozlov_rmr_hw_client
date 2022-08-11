import React from 'react';
import styles from './AppHeader.module.css';
import HeaderAuthBar from '../../../features/auth/components/HeaderAuthBar';
import logo from '../../icons/logo.svg';

const AppHeader: React.FC = () => {
	return <header className={styles.layout}>
		<img className={styles.logo} src={logo}/>
		<HeaderAuthBar layoutClass={styles.bar}/>
	</header>;
};

export default AppHeader;