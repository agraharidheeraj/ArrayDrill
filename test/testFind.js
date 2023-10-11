const find = require('../find');

const items = [1, 2, 3, 4, 5, 5];

const found = find(items, (item) => item === 3);
console.log(found);