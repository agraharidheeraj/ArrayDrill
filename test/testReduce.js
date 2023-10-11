const items = [1, 2, 3, 4, 5, 5];
const reduce = require('../reduce');

const reduced = reduce(items, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reduced);