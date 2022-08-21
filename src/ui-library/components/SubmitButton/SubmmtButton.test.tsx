import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { SubmitButton } from './SubmitButton';

describe('SubmitButton', () => {
	test('render with text', async () => {
		const text = 'some text';

		render(<SubmitButton text={text} />);
		const input = await screen.findByText(new RegExp(text, 'i'));

		expect(input).toBeInstanceOf(HTMLInputElement);
	});
});
