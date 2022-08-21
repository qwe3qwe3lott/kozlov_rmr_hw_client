import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
	test('render with text', async () => {
		const text = 'some text';

		render(<Button>{text}</Button>);
		const button = await screen.findByText(new RegExp(text, 'i'));

		expect(button).toBeInstanceOf(HTMLButtonElement);
	});
});
