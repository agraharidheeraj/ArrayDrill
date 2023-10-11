function filter(elements, cb) {
    const result = [];
    for (let i = 0; i < elements.length; i++) {
        if (cb(elements[i])) {
            result.push(elements[i]);
        }
    }
    return result;
}

module.exports =filter;