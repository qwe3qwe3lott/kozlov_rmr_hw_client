import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
	test('render with label and error', async () => {
		const labelText = 'label text';
		const errorText = 'error text';

		render(<Input errorMsg={errorText} label={labelText} />);

		const label = await screen.findByText(new RegExp(labelText, 'i'));
		expect(label).toBeInstanceOf(HTMLLabelElement);

		expect(label.childElementCount).toBe(2);
		expect(label.firstElementChild).toBeInstanceOf(HTMLInputElement);

		const span = await screen.findByText(new RegExp(errorText, 'i'));
		expect(span).toBeInstanceOf(HTMLSpanElement);
	});
});
