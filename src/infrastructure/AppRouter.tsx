import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import KittyScreen from '../screens/KittyScreen';
import AuthScreen from '../screens/AuthScreen';
import AppLayout from './layouts/AppLayout';

const AppRouter: React.FC = () => {
	return <Routes>
		<Route path={'/'} element={<AppLayout/>}>
			<Route index element={<KittyScreen/>}/>
			<Route path={'auth'} element={<AuthScreen/>}/>
			<Route path={'*'} element={<Navigate to={'/'} replace/>}/>
		</Route>
	</Routes>;
};

export default AppRouter;