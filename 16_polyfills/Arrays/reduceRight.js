Array.prototype.myReduceRight = function(cb, initialValue) {
    if (!Array.isArray(this)) {
        throw new TypeError('myReduceRight can only be called on Arrays');
    }
    if (typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function`);
    }

    let acc = initialValue;
    let startIndex = this.length - 1;

    if (acc === undefined) {
        if (this.length === 0) {
            throw new TypeError('cannot call ReduceRight on empty array with no initial value');
        }
        acc = this[startIndex];
        startIndex--;
    }

    for (let i = startIndex; i >= 0; i--) {
        if (this.hasOwnProperty(i)) {
            acc = cb(acc, this[i], i, this);
        }
    }

    return acc;
};
