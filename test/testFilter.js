const filter = require('../filter');
const items = [1, 2, 3, 4, 5, 5];

const filtered = filter(items, (item) => item > 3);
console.log(filtered);