import React from 'react';
import cn from 'classnames';
import { useGetProfileQuery, useSignOutMutation } from '../../api';
import { Button } from '../../../../ui-library/components/Button';
import { StyleColorPresets } from '../../../../ui-library/presets/StyleColorPresets';
import { WithLayoutClass } from '../../../../ui-library/util/WithLayoutClass';
import styles from './HeaderAuthBar.module.scss';

type Props = WithLayoutClass;

export const HeaderAuthBar: React.FC<Props> = ({ layoutClass = '' }) => {
	const { data, isSuccess, isFetching } = useGetProfileQuery();
	const [signOut] = useSignOutMutation();

	const signOutHandler = () => {
		signOut();
	};

	return !isFetching && isSuccess ? (
		<div className={cn(layoutClass, styles.layout)}>
			<p>{data.name}</p>
			<Button
				styleColorPreset={StyleColorPresets.Secondary}
				onClick={signOutHandler}
			>
				sign out
			</Button>
		</div>
	) : null;
};
