import React from 'react';
import { useGetProfileQuery, useSignOutMutation } from '../../api';
import styles from './HeaderAuthBar.module.css';
import Button from '../../../../ui-library/components/Button';
import { useNavigate } from 'react-router-dom';
type Props = {
	layoutClass?: string
}
const HeaderAuthBar: React.FC<Props> = ({ layoutClass = '' }) => {
	const { data, error } = useGetProfileQuery();
	const [signOut] = useSignOutMutation();
	const navigate = useNavigate();
	const signOutHandler = async () => {
		try {
			await signOut().unwrap();
		} finally {
			navigate('/auth');
		}
	};
	return !error && data ? <div className={`${layoutClass} ${styles.layout}`}>
		<p>{data.name}</p>
		<Button onClick={signOutHandler} text={'sign out'}/>
	</div> : null;
};

export default HeaderAuthBar;