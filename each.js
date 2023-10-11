function each(element, cb) {
    for(let i = 0; i < element.length; i++) {
        cb(element[i], i);
    }
}

module.exports = each;