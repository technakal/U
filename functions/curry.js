export function curry(fn, arity = fn.length) {
	if (typeof fn !== 'function') {
		throw new Error('curry expects a function');
	}
	return function curried(...args) {
		if (args.length >= arity) {
			return fn(...args);
		}
		return function (...args2) {
			return curried(...args, ...args2);
		};
	};
}
