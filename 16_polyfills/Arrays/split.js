String.prototype.split = function(separator) {
    if (typeof this !== 'string') {
        throw new TypeError('split must be called on a string');
    }

    let output = [];
    let start = 0;
    let end;

    if (separator === undefined) {
        separator = '';
    }

    if (typeof separator !== 'string') {
        throw new TypeError('Separator must be a string');
    }

    if (separator === '') {
        for (let i = 0; i < this.length; i++) {
            output.push(this.charAt(i));
        }
    } else {
        while ((end = this.indexOf(separator, start)) !== -1) {
            output.push(this.substring(start, end));
            start = end + separator.length;
        }
        output.push(this.substring(start));
    }

    return output;
};
