# JavaScript Array Utility Functions

This repository contains custom JavaScript array utility functions that mimic the behavior of some built-in JavaScript Array methods. These functions were implemented from scratch without using the exact methods they replicate. They are designed to work with arrays and offer functionality similar to built-in methods.

## Functions

### `each(elements, cb)`

This function iterates over a list of elements, yielding each in turn to the `cb` (callback) function. It passes both the element and its index as arguments to the callback.

### `map(elements, cb)`

`map` produces a new array of values by mapping each value in the input array through a transformation function (iteratee). It returns the new array with the transformed values.

### `reduce(elements, cb, startingValue)`

The `reduce` function combines all elements of the array into a single value, going from left to right. It passes each element along with the `startingValue` to the provided callback function. The `startingValue` serves as the initial value, and if it's undefined, the function uses the first element of the array as the initial value.

### `find(elements, cb)`

`find` looks through each value in the array and passes each element to the provided callback function. If the callback returns `true`, it returns that element. If no elements pass the truth test, it returns `undefined`.

### `filter(elements, cb)`

`filter` is similar to `find` but returns an array of all elements that pass the truth test. If no elements pass the truth test, it returns an empty array.

### `flatten(elements)`

The `flatten` function is used to flatten a nested array, regardless of the nesting depth. It employs recursion to transform a nested array into a single-level array.

## Usage

To use these utility functions, simply call them with the appropriate input array and callback functions as needed. See the provided test code in the comments of the JavaScript file for usage examples.

```javascript
const items = [1, 2, 3, 4, 5, 5];

// Example usage:
each(items, (item, index) => {
    console.log(`Item at index ${index}: ${item}`);
});

// Use map, reduce, find, filter, and flatten functions similarly.
