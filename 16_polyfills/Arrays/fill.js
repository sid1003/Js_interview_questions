Array.prototype.fill = function (value, start, end) {
  if (!Array.isArray(this)) {
    throw new TypeError("fill can only be called on arrays");
  }

  end = end || this.length;
  start = start || 0;

  start = Number(start);
  end = Number(end);

  for (let i = start; i < end; i++) {
    this[i] = value;
  }

  return this;
};
