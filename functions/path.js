import { reduce } from './reduce';

export function path(pathString, obj) {
	if (!pathString || pathString === '')
		throw new Error('path requires at least one segment.');
	if (typeof obj !== 'object' || Array.isArray(obj))
		throw new Error('obj must be an object.');
	return reduce(
		(acc, next) => (acc === undefined ? undefined : acc[next]),
		obj,
		pathString.split('.')
	);
}
