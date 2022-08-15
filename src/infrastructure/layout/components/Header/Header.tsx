import React, { Children, cloneElement } from 'react';
import logo from '../../../../ui-library/icons/logo.svg';
import styles from './Header.module.scss';

type Props = {
	children?: React.ReactElement | React.ReactElement[];
};

export const Header: React.FC<Props> = ({ children }) => {
	return (
		<header className={styles.layout}>
			<img className={styles.logo} src={logo} alt={'logo'} />
			{children &&
				Children.map(children, (child) =>
					cloneElement(child, {
						layoutStyle: styles.bar
					})
				)}
		</header>
	);
};
