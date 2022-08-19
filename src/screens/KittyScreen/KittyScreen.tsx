import React from 'react';
import { withAuth } from '../../features/auth/hocs/withAuth';
import { KittyPanel } from '../../features/kitty/components/KittyPanel';
import styles from './KittyScreen.module.scss';
import { kittyScreenTestId } from './';

const KittyScreen: React.FC = withAuth(() => {
	return (
		<section data-testid={kittyScreenTestId} className={styles.layout}>
			<KittyPanel />
		</section>
	);
});

export default KittyScreen;
