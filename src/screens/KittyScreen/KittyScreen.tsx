import React from 'react';
import auth from '../../features/auth/hocs/auth';
import styles from './KittyScreen.module.css';
import KittyPanel from '../../features/kitty/components/KittyPanel';

const KittyScreen: React.FC = () => {
	return <section className={styles.layout}>
		<KittyPanel/>
	</section>;
};

export default auth(KittyScreen);