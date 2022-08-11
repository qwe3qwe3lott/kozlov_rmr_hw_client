import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

const AppLayout: React.FC = () => {
	return <>
		<AppHeader/>
		<main>
			<Outlet/>
		</main>
		<AppFooter/>
	</>;
};

export default AppLayout;