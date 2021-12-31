import { pipe } from '..';

describe('pipe', () => {
	it('should throw an error if no functions are provided', () => {
		expect(() => pipe()).toThrow();
	});
	it('should return the result of applying the function list to the input value', () => {
		const v = 'this is a string';
		const expected = 'THIS_IS_A_STRING!';
		const piped = pipe(
			v => v.toUpperCase(),
			v => v.replace(/\s/g, '_'),
			v => v + '!'
		);
		expect(piped(v)).toBe(expected);
	});
});
