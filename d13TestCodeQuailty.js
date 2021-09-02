"use strict";
let assert = require("assert");
const test = require("./codeQuailty");
const testCompute = require("./codeQuailty");
const testBalance = require("./codeQuailty");
const testcalcDownPayment = require("./codeQuailty");
const testconvertFahrenheit = require("./codeQuailty");
const testDistanceOfcoordnires = require("./codeQuailty");

//number 1
describe("Is Vowel", function () {
  it("e is not vowel", function () {
    assert.equal(test.isVowel("e"), true);
  });

  it("i is not vowel", function () {
    assert.equal(test.isVowel("i"), true);
  });

  it("o is not vowel", function () {
    assert.equal(test.isVowel("o"), true);
  });
  it("u is not vowel", function () {
    assert.equal(test.isVowel("u"), true);
  });

  it("z is not vowel", function () {
    assert.equal(test.isVowel("z"), false);
  });

  it("5 is not vowel", function () {
    assert.equal(test.isVowel("5"), false);
  });
});

//number 2
describe("test of ComputSalesCommission", function () {
  it("tests salaried and 200 sales", function () {
    assert.strictEqual(testCompute.computeSalesCommission(true, 200), 0);
  });
  it("tests not salaried and 200 sales", function () {
    assert.strictEqual(testCompute.computeSalesCommission(false, 200), 6);
  });
  it("tests salaried and 300 sales", function () {
    assert.strictEqual(testCompute.computeSalesCommission(true, 300), 3);
  });
  it("tests not salaried and 300 sales", function () {
    assert.strictEqual(testCompute.computeSalesCommission(false, 300), 6);
  });
  it("tests salaried and 3500 sales", function () {
    assert.strictEqual(testCompute.computeSalesCommission(true, 3500), 70);
  });
  it("tests not salaried and 3500 sales", function () {
    assert.strictEqual(testCompute.computeSalesCommission(false, 3500), 105);
  });
});
//number 3
describe("test for interst per time", function () {
  it("tests initamount, annual rate and per time", function () {
    assert.strictEqual(
      testBalance.balanceOfSavingAccount(100, 10, 1),
      110.47130674412968
    );
  });
  it("tests initamount, annual rate and per time", function () {
    assert.strictEqual(
      testBalance.balanceOfSavingAccount(10000, 5, 10),
      16470.0949769028
    );
  });
});
//number 4a
describe("test down payment", function () {
  it("tests the cost and calculate downPayment", function () {
    assert.strictEqual(testcalcDownPayment.calcDownPayment(50000), 2500);
  });
  it("tests the cost and calculate downPayment", function () {
    assert.equal(testcalcDownPayment.calcDownPayment(40000), 2000);
  });
  it("tests the cost and calculate downPayment", function () {
    assert.equal(testcalcDownPayment.calcDownPayment(80000), 5500);
  });
});
//number 4b
describe("ferhanite to celcius", function () {
  it("tests ferhanite to cecius degree centigrade", function () {
    assert.strictEqual(testconvertFahrenheit.convertFahrenheit(212), 100);
  });
  it("tests ferhanite to cecius degree centigrade", function () {
    assert.strictEqual(
      testconvertFahrenheit.convertFahrenheit(57),
      13.88888888888889
    );
  });
});
//number 4c
describe("distance", function () {
  it("gives the distance between x and y co-ordinates", function () {
    assert.strictEqual(
      testDistanceOfcoordnires.distanceOfcoordnires(5, 5, 5, 5),
      0
    );
  });
  it("gives the distance between x and y co-ordinates", function () {
    assert.strictEqual(
      testDistanceOfcoordnires.distanceOfcoordnires(0, 10, 5, 20),
      11.180339887498949
    );
  });
});
