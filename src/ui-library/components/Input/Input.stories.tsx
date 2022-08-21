import React from 'react';
import { Props } from './Input';
import { Input } from './index';

export const Ordinary = (args: Props) => <Input {...args} />;

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		labelClass: {
			table: {
				disable: true
			}
		},
		inputClass: {
			table: {
				disable: true
			}
		},
		errorClass: {
			table: {
				disable: true
			}
		},
		label: {
			defaultValue: 'label'
		},
		errorMsg: {
			defaultValue: 'error message'
		},
		placeHolder: {
			defaultValue: 'placeholder...',
			control: {
				type: 'text'
			}
		}
	}
};
