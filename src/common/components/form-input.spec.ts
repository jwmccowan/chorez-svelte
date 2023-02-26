import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import FormInput from './form-input.svelte';

describe('<FormInput />', () => {
	it('should have accessible name', () => {
		const { getByRole } = render(FormInput, {
			label: 'Test name:',
			name: 'test-name',
			type: 'text'
		});
		expect(getByRole('textbox')).toHaveAccessibleName('Test name:');
	});
});
