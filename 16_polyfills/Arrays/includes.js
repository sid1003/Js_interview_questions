Array.prototype.myIncludes = function(searchElement, fromIndex = 0) {
    if (!Array.isArray(this)) {
        throw new TypeError("myIncludes can only be called on arrays");
    }

    let start = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    for (let i = start; i < this.length; i++) {
        // Special case for NaN
        if (this[i] === searchElement || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
            return true;
        }
    }

    return false;
};
