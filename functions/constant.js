export function constant(fn) {
	if (typeof fn !== 'function') throw new Error('constant expects a function');
	return fn;
}
