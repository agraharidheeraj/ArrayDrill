function flatten(elements) {
    const flattened = [];
    
    function recursiveFlatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                recursiveFlatten(arr[i]);
            } else {
                flattened.push(arr[i]);
            }
        }
    }
    
    recursiveFlatten(elements);
    
    return flattened;
}

module.exports = flatten;
