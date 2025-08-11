Array.prototype.myConcat = function () {
  if (!Array.isArray(this)) {
    throw new TypeError("concat can only be called on arrays");
  }

  let newArray = [...this];

  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];

    if (Array.isArray(arg)) {
      newArray.push(...arg);
    } else {
      newArray.push(arg);
    }
  }

  return newArray;
};
