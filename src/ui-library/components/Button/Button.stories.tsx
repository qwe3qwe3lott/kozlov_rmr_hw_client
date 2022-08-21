import React from 'react';
import { StyleColorPresets } from '../../presets/StyleColorPresets';
import { Props } from './Button';
import { Button } from './index';

export const Primary = (args: Props) => (
	<Button {...args} styleColorPreset={StyleColorPresets.Primary} />
);

export const Secondary = (args: Props) => (
	<Button {...args} styleColorPreset={StyleColorPresets.Secondary} />
);

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			defaultValue: 'accepts React.Node as children',
			control: {
				type: 'text'
			}
		},
		styleColorPreset: {
			table: {
				disable: true
			}
		},
		layoutClass: {
			table: {
				disable: true
			}
		}
	}
};
