export function isNil(v) {
	if (typeof v === 'number') return false;
	if (typeof v === 'string') return false;
	if (typeof v === 'boolean') return false;
	return !v || v === null || v === undefined;
}
