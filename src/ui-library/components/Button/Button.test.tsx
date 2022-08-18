import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
	test('render with text', () => {
		const text = 'some text';

		render(<Button>{text}</Button>);
		const button = screen.getByText(new RegExp(text, 'i'));

		expect(button).toBeInstanceOf(HTMLButtonElement);
		expect(button).toBeInTheDocument();
	});
});
