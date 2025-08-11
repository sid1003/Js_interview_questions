Array.prototype.myFlatMap = function (callback, thisArg) {
  if (!Array.isArray(this)) {
    throw new TypeError("myFlatMap can only be called on arrays");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let result = [];

  for (let i = 0; i < this.length; i++) {

    if (!(this.hasOwnProperty(i))) continue;

    const mappedValue = callback.call(thisArg, this[i], i, this);

    if (Array.isArray(mappedValue)) {
      result.push(...mappedValue);
    } else {
      result.push(mappedValue);
    }
  }

  return result;
};
