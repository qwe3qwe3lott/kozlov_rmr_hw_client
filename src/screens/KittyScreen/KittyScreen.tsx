import React from 'react';
import { withAuth } from '../../features/auth/hocs/withAuth';
import { KittyPanel } from '../../features/kitty/components/KittyPanel';
import styles from './KittyScreen.module.scss';

const KittyScreen: React.FC = withAuth(() => {
	return (
		<section className={styles.layout}>
			<KittyPanel />
		</section>
	);
});

export default KittyScreen;
