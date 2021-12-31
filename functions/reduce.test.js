import { reduce } from '..';

describe('reduce', () => {
	it('should return the result of applying the reducer function', () => {
		const reducer = (v1, v2) => v1 + v2;
		const expected = 10;
		expect(reduce(reducer, 0, [1, 2, 3, 4])).toEqual(expected);
		expect(reduce(reducer, 0)([1, 2, 3, 4])).toEqual(expected);
	});
});
