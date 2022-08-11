import React from 'react';
import styles from './Input.module.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string
	errorMsg?: string
}
const Input: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(({ label, errorMsg, ...props }, ref) => {
	return <label className={styles.label}>
		{label}
		<input {...props} className={styles.input} ref={ref}/>
		{errorMsg && <span className={styles.error}>{errorMsg}</span>}
	</label>;
});

export default Input;