Array.prototype.myReverse = function() {
    if (!Array.isArray(this)) {
        throw new TypeError("myReverse can only be called on arrays");
    }

    let mid = Math.floor(this.length / 2);
    for (let i = 0; i < mid; i++) {
        let temp = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = temp;
    }

    return this;
};

