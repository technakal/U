import { withGuard } from '..';

describe('withGuard', () => {
	const guardFnResult = 'guardFn result';
	const guardFn = v => guardFnResult;
	it('should return the result of the guard function if primary result isNil', () => {
		const fn = v => null;
		expect(withGuard(fn, guardFn, 1)).toBe(guardFnResult);
	});
	it('should return the result of the guard function if primary result throws an error', () => {
		const fn = v => {
			throw new Error('error');
		};
		expect(withGuard(fn, guardFn, 1)).toBe(guardFnResult);
	});
	it('should return the result of the primary function if it is not null or undefined', () => {
		const fn = v => v;
		expect(withGuard(fn, guardFn, 1)).toBe(1);
	});
	it('should return the result of the primary function if it does not throw an error', () => {
		const fn = v => v;
		expect(withGuard(fn, guardFn, 1)).toBe(1);
	});
});
