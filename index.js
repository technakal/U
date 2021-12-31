import { constant } from './functions/constant';
import { curry } from './functions/curry';
import { equals as _equals } from './functions/equals';
import { kindaEquals as _kindaEquals } from './functions/kindaEquals';
import { filter as _filter } from './functions/filter';
import { head } from './functions/head';
import { isEmpty } from './functions/isEmpty';
import { isNil } from './functions/isNil';
import { map as _map } from './functions/map';
import { path as _path } from './functions/path';
import { pipe as _pipe } from './functions/pipe';
import { property as _property } from './functions/property';
import { propertyEquals as _propertyEquals } from './functions/propertyEquals';
import { reduce as _reduce } from './functions/reduce';
import { self } from './functions/self';
import { stubFalse } from './functions/stubFalse';
import { stubTrue } from './functions/stubTrue';
import { tail } from './functions/tail';
import { withGuard as _withGuard } from './functions/withGuard';

const equals = curry(_equals);
const filter = curry(_filter);
const kindaEquals = curry(_kindaEquals);
const map = curry(_map);
const path = curry(_path);
const pipe = curry(_pipe);
const property = curry(_property);
const propertyEquals = curry(_propertyEquals);
const reduce = curry(_reduce);
const withGuard = curry(_withGuard);

const U = {
	constant,
	curry,
	equals,
	filter,
	head,
	isEmpty,
	isNil,
	kindaEquals,
	map,
	path,
	pipe,
	property,
	propertyEquals,
	reduce,
	self,
	stubFalse,
	stubTrue,
	tail,
	withGuard
};

export {
	constant,
	curry,
	equals,
	filter,
	head,
	isEmpty,
	isNil,
	kindaEquals,
	map,
	path,
	pipe,
	property,
	propertyEquals,
	reduce,
	self,
	stubFalse,
	stubTrue,
	tail,
	withGuard
};
export default U;
