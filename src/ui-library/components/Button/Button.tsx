import React from 'react';
import cn from 'classnames';
import { StyleColorPresets } from '../../presets/StyleColorPresets';
import { WithLayoutClass } from '../../util/WithLayoutClass';
import { WithStyleColorPreset } from '../../util/WithStyleColorPreset';
import styles from './Button.module.scss';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
	WithLayoutClass &
	WithStyleColorPreset & {
		children: React.ReactNode;
	};

export const Button: React.FC<Props> = ({
	children,
	styleColorPreset = StyleColorPresets.Primary,
	layoutClass,
	...props
}) => {
	return (
		<button
			{...props}
			className={cn(styles[`${styleColorPreset}Layout`], layoutClass)}
		>
			{children}
		</button>
	);
};
