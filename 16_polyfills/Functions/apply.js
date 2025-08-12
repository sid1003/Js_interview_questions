Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`);
  }

  if (!Array.isArray(args) && args !== null && args !== undefined) {
    throw new TypeError(
      "The second argument must be an array, null, or undefined"
    );
  }

  context = context ?? globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  const result = args ? context[fnSymbol](...args) : context[fnSymbol]();
  delete context[fnSymbol];
  return result;
};
