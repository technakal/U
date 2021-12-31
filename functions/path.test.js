import { path } from '..';

describe('path', () => {
	let testObject = {
		levelOne: {
			levelTwo: {
				levelThree: {
					someProperty: true,
					someOtherProperty: false
				}
			}
		}
	};
	it('should throw an error if called without path segment', () => {
		expect(() => path('', testObject)).toThrow();
	});
	it('should throw an error if called on a non-object', () => {
		expect(() => path('path.segment', [])).toThrow();
		expect(() => path('path.segment', true)).toThrow();
	});
	it('should return the value at the indicated path', () => {
		const expected = true;
		const pathString = 'levelOne.levelTwo.levelThree.someProperty';
		const actual = path(pathString, testObject);
		expect(actual).toBe(expected);
	});
	it('should return undefined if path does not exist on object', () => {
		const expected = undefined;
		const pathString = 'levelOne.levelTwo.levelThree.someThirdProperty';
		const pathString2 = 'levelOne.levelTwo.levelThree.levelFour.levelFive';
		expect(path(pathString, testObject)).toBe(expected);
		expect(path(pathString2, testObject)).toBe(expected);
	});
});
