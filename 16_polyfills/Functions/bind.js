Function.prototype.myBind = function(context, ...bindArgs) {
    if (typeof this !== 'function') {
        throw new TypeError(`${this} is not a function`);
    }

    const fn = this;

    function boundFunction(...callArgs) {
        // If used as a constructor
        if (this instanceof boundFunction) {
            return new fn(...bindArgs, ...callArgs);
        }

        const actualContext = context ?? globalThis;
        return fn.call(actualContext, ...bindArgs, ...callArgs);
    }

    return boundFunction;
};
