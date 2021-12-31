import { stubTrue } from '..';

describe('stubTrue', () => {
	it('should always return true', () => {
		expect(stubTrue()).toBe(true);
		expect(stubTrue(1)).toBe(true);
		expect(stubTrue('red')).toBe(true);
		expect(stubTrue(null)).toBe(true);
		expect(stubTrue({ one: 'one', two: 'two' })).toBe(true);
	});
});
