import { stubFalse } from '..';

describe('stubFalse', () => {
	it('should always return false', () => {
		expect(stubFalse()).toBe(false);
		expect(stubFalse(1)).toBe(false);
		expect(stubFalse('red')).toBe(false);
		expect(stubFalse(null)).toBe(false);
		expect(stubFalse({ one: 'one', two: 'two' })).toBe(false);
	});
});
