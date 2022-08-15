import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderAuthBar } from '../../features/auth/components/HeaderAuthBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const Layout: React.FC = () => (
	<>
		<Header>
			<HeaderAuthBar />
		</Header>
		<main>
			<Outlet />
		</main>
		<Footer />
	</>
);
