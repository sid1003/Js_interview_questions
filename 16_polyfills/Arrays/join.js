Array.prototype.myJoin = function(separator) {
    if (!Array.isArray(this)) {
        throw new TypeError("myJoin can only be called on arrays");
    }

    // Default separator is comma
    separator = separator === undefined ? ',' : String(separator);

    let str = '';
    for (let i = 0; i < this.length; i++) {
        // Treat null/undefined as empty string (same as native join)
        let val = (this[i] === null || this[i] === undefined) ? '' : this[i];
        str += val;
        if (i < this.length - 1) {
            str += separator;
        }
    }

    return str;
};
