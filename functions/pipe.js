import { reduce } from './reduce';

export function pipe(...fns) {
	if (!fns.length) throw new Error('pipe requires at least one function.');
	return function piped(v) {
		return reduce((acc, next) => next(acc), v, fns);
	};
}
