import { tail } from '..';

describe('tail', () => {
	it('should throw an error if value is not iterable', () => {
		const value = 123;
		expect(() => tail(value)).toThrow();
	});
	it('should return all but the value in the first index', () => {
		const v = [1, 2, 3];
		const v2 = 'this is a string';
		const expected1 = [2, 3];
		const expected2 = 'his is a string';
		expect(tail(v)).toEqual(expected1);
		expect(tail(v2)).toEqual(expected2);
	});
});
