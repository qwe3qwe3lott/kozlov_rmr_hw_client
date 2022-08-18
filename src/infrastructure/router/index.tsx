import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../layout';
const KittyScreen = lazy<React.FC>(() => import('../../screens/KittyScreen'));
const AuthScreen = lazy<React.FC>(() => import('../../screens/AuthScreen'));

export const Router: React.FC = () => (
	<Routes>
		<Route path={'/'} element={<Layout />}>
			<Route
				index
				element={
					<Suspense>
						<KittyScreen />
					</Suspense>
				}
			/>
			<Route
				path={'auth'}
				element={
					<Suspense>
						<AuthScreen />
					</Suspense>
				}
			/>
			<Route path={'*'} element={<Navigate to={'/'} replace />} />
		</Route>
	</Routes>
);
