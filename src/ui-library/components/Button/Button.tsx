import React from 'react';
import styles from './Button.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string
}
const Button: React.FC<Props> = ({ text, ...props }) => {
	return <button {...props} className={styles.layout}>{text}</button>;
};

export default Button;