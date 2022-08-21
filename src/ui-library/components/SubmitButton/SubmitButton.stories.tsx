import React from 'react';
import { StyleColorPresets } from '../../presets/StyleColorPresets';
import { Props } from './SubmitButton';
import { SubmitButton } from './index';

export const Primary = (args: Props) => (
	<SubmitButton {...args} styleColorPreset={StyleColorPresets.Primary} />
);

export const Secondary = (args: Props) => (
	<SubmitButton {...args} styleColorPreset={StyleColorPresets.Secondary} />
);

export default {
	title: 'SubmitButton',
	component: SubmitButton,
	argTypes: {
		text: {
			defaultValue: 'your text'
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
