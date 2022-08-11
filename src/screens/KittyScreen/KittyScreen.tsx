import React from 'react';
import auth from '../../features/auth/hocs/auth';
const url = new URL(`${process.env.REACT_APP_BACKEND_URL}/kitty`);

const KittyScreen: React.FC = () => {
	return <section>kitty</section>;
};

export default auth(KittyScreen, async () => {
	const response = await fetch(url);
	if (!response.ok) throw new Error('Unauthorized!');
	return await response.blob();
}, '/auth');