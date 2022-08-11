import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const auth = <R,>(
	ReactFC: React.FC<{ resource: R }>,
	resourceLoader: () => Promise<R>,
	redirectPath: string
): React.FC => (() => {
		const navigate = useNavigate();
		const [resource, setResource] = useState<R>();

		useEffect(() => {
			resourceLoader()
				.then(resource => {
					setResource(resource);
				})
				.catch(() => {
					navigate(redirectPath, { replace: true });
				});
		}, []);

		return resource ? <ReactFC resource={resource}/> : null;
	});

export default auth;