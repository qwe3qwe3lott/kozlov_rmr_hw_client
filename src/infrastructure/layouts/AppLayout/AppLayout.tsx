import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../../../ui-library/components/AppHeader';
import AppFooter from '../../../ui-library/components/AppFooter';
import HeaderAuthBar from '../../../features/auth/components/HeaderAuthBar';

const AppLayout: React.FC = () => {
	return <>
		<AppHeader>
			<HeaderAuthBar/>
		</AppHeader>
		<main>
			<Outlet/>
		</main>
		<AppFooter/>
	</>;
};

export default AppLayout;