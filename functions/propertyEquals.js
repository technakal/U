import { equals } from './equals';
import { property } from './property';

export function propertyEquals(prop, value, obj) {
	return equals(property(prop, obj), value);
}
