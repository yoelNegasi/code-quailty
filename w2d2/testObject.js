"use strict";
/* global assert Accumulator  Calculator*/
/* */
const assert = require("assert");
const myExports = require("./object");
const Accumulator = myExports.Accumulator;
const Calculator = myExports.Calculator;
describe("calculator from constructor function", function () {
  let calc;
  before(function () {
    calc = new Calculator();
    calc.setValues(20, 30);
  });

  it("when 20 and 30 are entered, the sum is 50", function () {
    assert.strictEqual(calc.a, 20);
    assert.strictEqual(calc.b, 30);
    assert.strictEqual(calc.sum(), 50);
  });

  it("when 20 and 30 are entered, the product is 600", function () {
    assert.strictEqual(calc.a, 20);
    assert.strictEqual(calc.b, 30);
    assert.strictEqual(calc.mul(), 600);
  });
});

describe("accumulator", function () {
  it("checks initialValue and increment", function () {
    const accumulator = new Accumulator(5, 10);
    assert.strictEqual(accumulator.currentValue, 5);
    assert.strictEqual(accumulator.increment, 10);
  });

  it("checks accumulate", function () {
    const accumulator = new Accumulator(5, 10);
    accumulator.accumulate();
    accumulator.accumulate();
    assert.strictEqual(accumulator.currentValue, 25);
    assert.strictEqual(accumulator.increment, 10);
  });

  it("checks report", function () {
    const accumulator = new Accumulator(5, 10);
    assert.strictEqual(accumulator.report(), 5);
  });
});
