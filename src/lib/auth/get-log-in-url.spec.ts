import { describe, expect, it } from 'vitest';
import getLogInUrl from './get-log-in-url';

describe('getLogInUrl()', () => {
	it('should return `/log-in` by default', () => {
		expect(getLogInUrl()).toBe('/log-in');
	});

	it('should return a referrer path', () => {
		const testPath = '/test-path';
		const expected = '/log-in?referrer=/test-path';
		expect(getLogInUrl(testPath)).toBe(expected);
	});
});
