import { filter } from '..';

describe('filter', () => {
	it('should return the result of applying the filter function', () => {
		const filterer = v => v > 10;
		const expected = [11, 12];
		const v = [1, 2, 10, 11, 12];
		expect(filter(filterer, v)).toEqual(expected);
		expect(filter(filterer)(v)).toEqual(expected);
	});
});
