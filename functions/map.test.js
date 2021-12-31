import { map } from '..';

describe('map', () => {
	it('should return the result of applying the map function', () => {
		const mapper = v => v + ' mapped';
		const expected = ['a mapped', 'b mapped', 'c mapped'];
		const v = ['a', 'b', 'c'];
		expect(map(mapper, v)).toEqual(expected);
		expect(map(mapper)(v)).toEqual(expected);
	});
});
