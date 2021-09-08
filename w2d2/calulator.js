const calculator = {
  a: 1,
  b: 1,
  setValues: function (x, y) {
    this.a = x;
    this.b = y;
  },

  sum: function () {
    return this.a + this.b;
  },

  mul: function () {
    return this.a * this.b;
  },
};
module.exports = { calculator };
