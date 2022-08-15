import React from 'react';
import { auth } from '../../features/auth/hocs/auth';
import { KittyPanel } from '../../features/kitty/components/KittyPanel';
import styles from './KittyScreen.module.scss';

const KittyScreen: React.FC = auth(() => {
	return (
		<section className={styles.layout}>
			<KittyPanel />
		</section>
	);
});

export default KittyScreen;
