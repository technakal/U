import { head } from '..';

describe('head', () => {
	it('should throw an error if value is not iterable', () => {
		const value = 123;
		expect(() => head(value)).toThrow();
	});
	it('should return the value in the first index', () => {
		const v = [1, 2, 3];
		const v2 = 'this is a string';
		const expected1 = 1;
		const expected2 = 't';
		expect(head(v)).toEqual(expected1);
		expect(head(v2)).toEqual(expected2);
	});
});
