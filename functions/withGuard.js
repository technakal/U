import { isNil } from './isNil';

export function withGuard(fn, guardFn, v) {
	try {
		const result = fn(v);
		if (isNil(result)) return guardFn(v);
		return result;
	} catch (error) {
		return guardFn(error);
	}
}
