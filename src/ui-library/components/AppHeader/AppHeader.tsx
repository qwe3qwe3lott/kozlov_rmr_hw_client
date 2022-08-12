import React from 'react';
import styles from './AppHeader.module.css';
import logo from '../../icons/logo.svg';

type Props = {
	children?: React.ReactElement | React.ReactElement[]
}
const AppHeader: React.FC<Props> = ({ children }) => {
	return <header className={styles.layout}>
		<img className={styles.logo} src={logo} alt={'logo'}/>
		{children && React.Children.map(children, (child) => {
			return React.cloneElement(child, {
				layoutStyle: styles.bar
			});
		})}
	</header>;
};

export default AppHeader;