Array.prototype.myFlat = function (depth) {
  if (!Array.isArray(this)) {
    throw new TypeError("myFlat can only be called on arrays");
  }

  let flattenDepth = depth === undefined ? 1 : Math.floor(depth);

  if (flattenDepth < 1) {
    return this.slice();
  }

  let result = [];

  for (let i = 0; i < this.length; i++) {
    const val = this[i];
    if (Array.isArray(val)) {
      result = result.concat(val.myFlat(flattenDepth - 1));
    } else {
      result.push(val);
    }
  }

  return result;
};
