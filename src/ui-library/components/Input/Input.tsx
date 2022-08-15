import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	errorMsg?: string;
};

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
	({ label, errorMsg, ...props }, ref) => {
		return (
			<label className={styles.label}>
				{label}
				<input {...props} className={styles.input} ref={ref} />
				{errorMsg && <span className={styles.error}>{errorMsg}</span>}
			</label>
		);
	}
);
