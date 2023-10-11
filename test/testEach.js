const each = require('../each');

const items = [1, 2, 3, 4, 5, 5];

// Example usage:
each(items, (item, index) => {
    console.log(`Item at index ${index}: ${item}`);
});