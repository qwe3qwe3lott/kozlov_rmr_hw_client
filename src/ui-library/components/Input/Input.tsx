import React, { forwardRef } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	errorMsg?: string;
	labelClass?: string;
	inputClass?: string;
	errorClass?: string;
};

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
	({ label, errorMsg, labelClass, inputClass, errorClass, ...props }, ref) => {
		return (
			<label className={cn(styles.label, labelClass)}>
				{label}
				<input {...props} className={cn(styles.input, inputClass)} ref={ref} />
				{errorMsg && (
					<span className={cn(styles.error, errorClass)}>{errorMsg}</span>
				)}
			</label>
		);
	}
);
