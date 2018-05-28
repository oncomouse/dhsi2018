import {
    __
    , add
    , append
    , any
	, compose
    , equals
    , filter
	, map
    , modulo
	, multiply
    , reduce
} from 'ramda';

const action = map(compose(
	multiply(2)
	, add(1)
))
console.log(action([1,2,3,4]))

const test = (predicate, list) => reduce((acc, cur) => (acc ? true : predicate(cur)), false, list)
const isEven = compose(
    equals(0)
    , modulo(__, 2) // WTF?
)
console.log(test(isEven, [1,3,5]));
console.log(any(isEven, [1,3,5])); // We can derive most functions from reduce

const myMap = (f, xs) => reduce((ys, x) => append(f(x), ys), [], xs);
console.log(
    myMap(add(1), [1,2,3,4])
);
const myFilter = (f, xs) => reduce((ys, x) => f(x) ? append(x, ys) : ys, [], xs);
console.log(
    myFilter(isEven, [1,2,3,4])
);
console.log(
    filter(isEven, [1,2,3,4])
);