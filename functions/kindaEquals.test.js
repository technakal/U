import { kindaEquals } from '..';

describe('kindaEquals', () => {
	it('should return true if the two values are equal with coercion', () => {
		expect(kindaEquals('1', 1)).toBe(true);
		expect(kindaEquals('a', 'a')).toBe(true);
	});
	it('should return false if the two values are not equal with coercion', () => {
		expect(kindaEquals(7, 1)).toBe(false);
		expect(kindaEquals(2, '3')).toBe(false);
		expect(kindaEquals(true, false)).toBe(false);
	});
});
