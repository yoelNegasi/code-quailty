const assert = require("assert");
const testMaxOfThree = require("./array");
const testSum = require("./array");
const testMultiply = require("./array");
const testLongest = require("./array");
const testReverseArray = require("./array");
const testReverseArrayInPlace = require("./array");
const testScoreExam = require("./array");

describe("maxOfThree", function () {
  it("tests 1 2 3", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(1, 2, 3), 3);
  });
  it("tests 1 3 2", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(10, 30, 20), 30);
  });
  it("tests 2 1 3", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(2, 1, 3), 3);
  });
  it("tests 2 3 1", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(22, 33, 11), 33);
  });
  it("tests 3 2 1", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(3, 2, 1), 3);
  });
  it("tests 3 1 2", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(333, 111, 222), 333);
  });
  it("tests -1 -2 -3", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(-1, -2, -3), -1);
  });
  it("tests -1 -2 -2", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(-1, -2, -2), -1);
  });
  it("tests 5 5 -1", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(5, 5, -1), 5);
  });
  it("tests -2 0 -2", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(-2, 0, -2), 0);
  });
  it("tests 6 6 6", function () {
    assert.strictEqual(testMaxOfThree.maxOfThree(6, 6, 6), 6);
  });
});

describe("sum and multiply", function () {
  it("tests sum of 1 2 3 and 1 2 3 4", function () {
    assert.strictEqual(testSum.sum([1, 2, 3]), 6);
    assert.strictEqual(testSum.sum([1, 2, 3, 4]), 10);
  });
  it("tests multiply 3 2 10 and 1 2 3 4", function () {
    assert.strictEqual(testMultiply.multiply([3, 2, 10]), 60);
    assert.strictEqual(testMultiply.multiply([1, 2, 3, 4]), 24);
  });
});

describe("findLongestWord", function () {
  it("tests longest", function () {
    assert.strictEqual(
      testLongest.findLongestWord(["this", "is", "a", "test", "longest"]),
      7
    );
  });
  it("tests longest with spaces", function () {
    assert.strictEqual(
      testLongest.findLongestWord([
        "this",
        "is",
        "a word with spaces",
        "test",
        "longest",
      ]),
      18
    );
  });
  it("tests longest with equal length words", function () {
    assert.strictEqual(
      testLongest.findLongestWord(["is", "is", "is", "is", "is"]),
      2
    );
  });
  it("tests longest with some words equal length", function () {
    assert.strictEqual(
      testLongest.findLongestWord(["this", "is", "this", "is", "is"]),
      4
    );
  });
});

describe("reverseArray", function () {
  it("tests reverseArray odd number elements", function () {
    assert.deepEqual(testReverseArray.reverseArray(["A", "B", "C"]), [
      "C",
      "B",
      "A",
    ]);
  });
  it("tests reverse even number elements", function () {
    assert.deepEqual(
      testReverseArrayInPlace.reverseArrayInPlace(["A", "B", "C", "D"]),
      ["D", "C", "B", "A"]
    );
    assert.deepEqual(testReverseArray.reverseArray(["A", "B", "C", "D"]), [
      "D",
      "C",
      "B",
      "A",
    ]);
  });
  it("tests reverse odd number elements", function () {
    assert.deepEqual(
      testReverseArrayInPlace.reverseArrayInPlace([1, 2, 3, 4, 5]),
      [5, 4, 3, 2, 1]
    );
    assert.deepEqual(testReverseArray.reverseArray([1, 2, 3, 4, 5]), [
      5,
      4,
      3,
      2,
      1,
    ]);
  });
});

describe("score exam", function () {
  const studentAnswers = [
    [1, 1, 2, 4],
    [2, 1, 2, 2],
    [3, 1, 3, 4],
  ];
  const correctAnswers = [3, 1, 2, 4];
  it("exam with 3 students", function () {
    assert.deepEqual(testScoreExam.scoreExams(studentAnswers, correctAnswers), [
      3,
      2,
      3,
    ]);
  });
  it("exam with 3 students: one student has all incorrect answers", function () {
    assert.deepEqual(
      testScoreExam.scoreExams(
        [
          [1, 1, 2, 4],
          [2, 1, 2, 2],
          [1, 2, 3, 1],
        ],
        correctAnswers
      ),
      [3, 2, 0]
    );
  });
  it("exam with 3 students: one student has all correct answers", function () {
    assert.deepEqual(
      testScoreExam.scoreExams(
        [
          [1, 1, 2, 4],
          [2, 1, 2, 2],
          [3, 1, 2, 4],
        ],
        correctAnswers
      ),
      [3, 2, 4]
    );
  });
});
