import { constant } from '..';

describe('constant', () => {
	it('should return the supplied function', () => {
		const fn = () => 'always returns this function';
		expect(constant(fn)).toBe(fn);
	});
	it('should throw an error if input is not a function', () => {
		expect(() => constant(1)).toThrow();
	});
});
