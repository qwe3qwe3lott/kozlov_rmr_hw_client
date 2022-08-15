import React from 'react';
import styles from './Button.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
};

export const Button: React.FC<Props> = ({ text, ...props }) => {
	return (
		<button {...props} className={styles.layout}>
			{text}
		</button>
	);
};
