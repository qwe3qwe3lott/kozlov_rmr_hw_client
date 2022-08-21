import React from 'react';
import cn from 'classnames';
import { StyleColorPresets } from '../../presets/StyleColorPresets';
import { WithStyleColorPreset } from '../../util/WithStyleColorPreset';
import { WithLayoutClass } from '../../util/WithLayoutClass';
import styles from './SubmitButton.module.scss';

export type Props = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'type' | 'value'
> &
	WithStyleColorPreset &
	WithLayoutClass & {
		text: string;
	};

export const SubmitButton: React.FC<Props> = ({
	text = '',
	styleColorPreset = StyleColorPresets.Primary,
	layoutClass,
	...props
}) => {
	return (
		<input
			{...props}
			className={cn(styles[`${styleColorPreset}Layout`], layoutClass)}
			type={'submit'}
			value={text}
		/>
	);
};
