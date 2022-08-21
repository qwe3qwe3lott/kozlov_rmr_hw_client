import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../layout';
const KittyScreen = lazy<React.FC>(() => import('../../screens/KittyScreen'));
const AuthScreen = lazy<React.FC>(() => import('../../screens/AuthScreen'));

type Props = {
	children: React.ReactNode;
};
const Fallback: React.FC<Props> = ({ children }) => (
	<div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
		{children}
	</div>
);

export const Router: React.FC = () => (
	<Routes>
		<Route path={'/'} element={<Layout />}>
			<Route
				index
				element={
					<Suspense fallback={<Fallback>'loading kitty page...'</Fallback>}>
						<KittyScreen />
					</Suspense>
				}
			/>
			<Route
				path={'auth'}
				element={
					<Suspense fallback={<Fallback>'loading auth page...'</Fallback>}>
						<AuthScreen />
					</Suspense>
				}
			/>
			<Route path={'*'} element={<Navigate to={'/'} replace />} />
		</Route>
	</Routes>
);
