import { isNil } from '..';

describe('isNil', () => {
	it('should return true for null', () => {
		expect(isNil(null)).toBe(true);
	});
	it('should return true for undefined', () => {
		expect(isNil(undefined)).toBe(true);
	});
	it('should return true for no input', () => {
		expect(isNil()).toBe(true);
	});
	it('should return false for a boolean', () => {
		expect(isNil(true)).toBe(false);
		expect(isNil(false)).toBe(false);
	});
	it('should return false for a string', () => {
		expect(isNil('a')).toBe(false);
		expect(isNil('')).toBe(false);
	});
	it('should return false for a numeric value, including NaN', () => {
		expect(isNil(0)).toBe(false);
		expect(isNil(1)).toBe(false);
		expect(isNil(NaN)).toBe(false);
	});
	it('should return false for an object', () => {
		expect(isNil({})).toBe(false);
		expect(isNil({ a: 1 })).toBe(false);
	});
	it('should return false for an array', () => {
		expect(isNil([])).toBe(false);
		expect(isNil([1])).toBe(false);
	});
});
