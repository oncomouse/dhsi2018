import {
	add
	, compose
	, map
	, multiply
} from 'ramda';

const action = map(compose(
	multiply(2)
	, add(1)
))

console.log(action([1,2,3,4]))