export function property(prop, obj) {
	if (typeof obj !== 'object') return undefined;
	try {
		Object.keys(obj).length === 0;
	} catch (error) {
		return undefined;
	}
	return obj[prop];
}
