import { propertyEquals } from '..';
describe('propertyEquals', () => {
	const obj = {
		name: 'John',
		age: 30
	};
	it('should return true if the property matches the expected value', () => {
		const expectedName = 'John';
		const expectedAge = 30;
		const actualName = propertyEquals('name', expectedName)(obj);
		const actualAge = propertyEquals('age', expectedAge, obj);
		expect(actualName).toBe(true);
		expect(actualAge).toBe(true);
	});
	it('should return false if the property does not match expected value', () => {
		const expectedName = 'Dave';
		const expectedAge = 32;
		const actualName = propertyEquals('name', expectedName)(obj);
		const actualAge = propertyEquals('age', expectedAge, obj);
		expect(actualName).toBe(false);
		expect(actualAge).toBe(false);
	});
	it('should return false if the property does not exist', () => {
		expect(propertyEquals('surname', 'John', obj)).toBe(false);
	});
});
