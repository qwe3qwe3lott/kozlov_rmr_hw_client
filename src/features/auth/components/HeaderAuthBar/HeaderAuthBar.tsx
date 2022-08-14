import React from 'react';
import { useGetProfileQuery, useSignOutMutation } from '../../api';
import styles from './HeaderAuthBar.module.css';
import Button from '../../../../ui-library/components/Button';
type Props = {
	layoutClass?: string
}
const HeaderAuthBar: React.FC<Props> = ({ layoutClass = '' }) => {
	const { data, isSuccess, isFetching } = useGetProfileQuery();
	const [signOut] = useSignOutMutation();
	const signOutHandler = () => {
		signOut();
	};
	return !isFetching && isSuccess ? <div className={`${layoutClass} ${styles.layout}`}>
		<p>{data.name}</p>
		<Button onClick={signOutHandler} text={'sign out'}/>
	</div> : null;
};

export default HeaderAuthBar;