import { self } from '..';

describe('self', () => {
	it('should return the input value', () => {
		const testFn = () => true;
		expect(self(1)).toBe(1);
		expect(self('red')).toBe('red');
		expect(self(true)).toBe(true);
		expect(self(null)).toBe(null);
		expect(self({ one: 'one', two: 'two' })).toEqual({
			one: 'one',
			two: 'two'
		});
		expect(self(testFn)).toEqual(testFn);
	});
	it('should not throw an error if no input', () => {
		expect(self()).toBe(undefined);
	});
});
