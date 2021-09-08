"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @returns {Accumulator} constructor function
 */
function Accumulator(initial, increment) {
  this.currentValue = initial;
  this.increment = increment;

  this.accumulate = function () {
    this.currentValue = this.currentValue + this.increment;
    return this.currentValue;
  };

  this.report = function () {
    return this.currentValue;
  };
}

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator(initial, increment) {
  this.a = initial;
  this.b = increment;

  this.setValues = function (x, y) {
    this.a = x;
    this.b = y;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}
