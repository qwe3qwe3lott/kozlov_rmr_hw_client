import React, { useEffect, useState } from 'react';
import { useGetKittyQuery } from '../../api';
import styles from './KittyPanel.module.scss';

export const KittyPanel: React.FC = () => {
	const [imgSource, setImageSource] = useState('');
	const { isSuccess, data } = useGetKittyQuery();

	useEffect(() => {
		if (isSuccess)
			setImageSource(`${process.env.REACT_APP_BACKEND_URL}${data.src}`);
	}, [isSuccess]);

	return (
		<div className={styles.layout}>
			<img alt={'kitty'} src={imgSource} className={styles.kitty} />
			<p className={styles.text}>Meow!</p>
		</div>
	);
};
