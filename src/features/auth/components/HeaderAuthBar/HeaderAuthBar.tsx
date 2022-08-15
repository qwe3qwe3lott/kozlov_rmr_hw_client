import React from 'react';
import { useGetProfileQuery, useSignOutMutation } from '../../api';
import { Button } from '../../../../ui-library/components/Button';
import styles from './HeaderAuthBar.module.scss';

type Props = {
	layoutClass?: string;
};

export const HeaderAuthBar: React.FC<Props> = ({ layoutClass = '' }) => {
	const { data, isSuccess, isFetching } = useGetProfileQuery();
	const [signOut] = useSignOutMutation();

	const signOutHandler = () => {
		signOut();
	};

	return !isFetching && isSuccess ? (
		<div className={`${layoutClass} ${styles.layout}`}>
			<p>{data.name}</p>
			<Button onClick={signOutHandler} text={'sign out'} />
		</div>
	) : null;
};
