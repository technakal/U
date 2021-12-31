import { curry } from '..';

describe('curry', () => {
	it('should curry a function', () => {
		const fn = (a, b, c) => a + b + c;
		const curried = curry(fn);
		expect(curried(1, 2, 3)).toBe(6);
		expect(curried(1, 2)(3)).toBe(6);
		expect(curried(1)(2, 3)).toBe(6);
		expect(curried(1)(2)(3)).toBe(6);
	});
	it("should trhow an error if first argument isn't a function", () => {
		expect(() => curry(1)).toThrow();
	});
});
