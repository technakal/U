import { property } from '..';
describe('property', () => {
	const obj = {
		name: 'John',
		age: 30
	};
	it('should return the value of the property if it exists', () => {
		expect(property('name', obj)).toBe('John');
	});
	it('should return undefined if the property does not exist', () => {
		expect(property('surname', obj)).toBe(undefined);
	});
	it('should return undefined if the test object is not an object', () => {
		expect(property('name', 'name: john')).toBe(undefined);
		expect(property('name', null)).toBe(undefined);
	});
});
