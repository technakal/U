import { equals } from '..';

describe('equals', () => {
	it('should return true if the two values are strictly equal', () => {
		expect(equals(1, 1)).toBe(true);
		expect(equals('a', 'a')).toBe(true);
		expect(equals(false, false)).toBe(true);
	});
	it('should return false if the two values are not strictly equal', () => {
		expect(equals(7, 1)).toBe(false);
		expect(equals(2, '2')).toBe(false);
		expect(equals(true, false)).toBe(false);
	});
});
