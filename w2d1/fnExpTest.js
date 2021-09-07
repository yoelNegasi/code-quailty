const assert = require("assert");
const testDouble = require("./cc");
const tTimes100 = require("./cc");
const tMyMap = require("./cc");
describe("double", function () {
  it("tests double 10", function () {
    assert.strictEqual(testDouble.double(10), 20);
  });
  it("tests double 0", function () {
    assert.strictEqual(testDouble.double(0), 0);
  });
  it("tests double -10", function () {
    assert.strictEqual(testDouble.double(-10), -20);
  });
});
describe("times100", function () {
  it("tests times100 10", function () {
    assert.strictEqual(tTimes100.times100(10), 1000);
  });
  it("tests times100 0", function () {
    assert.strictEqual(tTimes100.times100(0), 0);
  });
  it("tests times100 -10", function () {
    assert.strictEqual(tTimes100.times100(-10), -1000);
  });
});

describe("myMap", function () {
  const testArray = [-10, 0, 10, 20];

  it("tests myMap on double", function () {
    assert.deepStrictEqual(tMyMap.myMap(testArray, tMyMap.double), [
      -20,
      0,
      20,
      40,
    ]);
  });
  it("tests myMap on times100", function () {
    assert.deepStrictEqual(tMyMap.myMap(testArray, tMyMap.times100), [
      -1000,
      0,
      1000,
      2000,
    ]);
  });
});

describe("myMap", function () {
  const testArray = [-10, 0, 10, 20];
  it("tests myMap on triples anonymous function", function () {
    assert.deepStrictEqual(
      tMyMap.myMap(testArray, function (num) {
        return num * 3;
      }),
      [-30, 0, 30, 60]
    );
  });
  it("tests myMap on triples arrow function", function () {
    assert.deepStrictEqual(
      tMyMap.myMap(testArray, function (num) {
        return num * 3;
      }),
      [-30, 0, 30, 60]
    );
  });
});
