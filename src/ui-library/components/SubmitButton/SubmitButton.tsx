import React from 'react';
import styles from './SubmitButton.module.scss';

type Props = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'type' | 'value'
> & {
	text: string;
};

export const SubmitButton: React.FC<Props> = ({ text, ...props }) => {
	return (
		<input {...props} className={styles.layout} type={'submit'} value={text} />
	);
};
