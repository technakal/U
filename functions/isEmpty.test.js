import { isEmpty } from '..';

describe('isEmpty', () => {
	it('should return undefined for a non-object or non-array', () => {
		expect(isEmpty('')).toBe(undefined);
	});
	it('should return true for an empty array', () => {
		expect(isEmpty([])).toBe(true);
	});
	it('should return true for an empty object', () => {
		expect(isEmpty({})).toBe(true);
	});
	it('should return false for a non-empty array', () => {
		expect(isEmpty([1])).toBe(false);
	});
	it('should return false for a non-empty object', () => {
		expect(isEmpty({ a: 1 })).toBe(false);
	});
});
