export function tail(v) {
	if (typeof v !== 'string' && !Array.isArray(v))
		throw new Error('head requires an iterable');
	return v.slice(1);
}
