Array.prototype.myForEach = function (callback, thisArg) {
  if (!Array.isArray(this)) {
    throw new TypeError("myForEach can only be called on arrays");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};
