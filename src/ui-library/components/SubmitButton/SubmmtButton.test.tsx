import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { SubmitButton } from './SubmitButton';

describe('SubmitButton', () => {
	test('render with text', () => {
		const text = 'some text';

		render(<SubmitButton text={text} />);
		const button = screen.getByText(new RegExp(text, 'i'));

		expect(button).toBeInstanceOf(HTMLInputElement);
		expect(button).toBeInTheDocument();
	});
});
