import React from 'react';
import styles from './SubmitButton.module.css';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'> & {
    text: string
}
const SubmitButton: React.FC<Props> = ({ text, ...props }) => {
	return <input {...props} className={styles.layout} type={'submit'} value={text}/>;
};

export default SubmitButton;