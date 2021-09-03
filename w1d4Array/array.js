module.exports = {
  maxOfThree,
  sum,
  multiply,
  findLongestWord,
  reverseArray,
  reverseArrayInPlace,
  scoreExams,
};
/**
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a,b,c
 */
function maxOfThree(a, b, c) {
  if (a >= b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(maxOfThree(5, 5, -1));
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of the numbers in arr
 */
function sum(arr) {
  let sum = 0;
  for (let a of arr) {
    sum += a;
  }
  return sum;
}
console.log(sum([1, 2, 3, 4]));

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} multiply of the numbers in arr
 */
function multiply(arr) {
  let mul = 1;
  for (let key of arr) {
    mul *= key;
  }
  return mul;
}
console.log(multiply([1, 2, 3, 4]));

/**
 *
 * @param {Array} arr of strings
 * @returns{number} length of longest srting in arr
 */
function findLongestWord(arr) {
  let longest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest.length;
}

console.log(findLongestWord(["Michael", "say", "Longest", "Mike"]));

/**
 *
 * @param {Array} arr
 * @returns {Array} arr in reverse
 */
function reverseArray(arr) {
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

/**
 *
 * @param {Array} arr in reverse
 * @returns {Array} modifies the reversed arr
 */
function reverseArrayInPlace(arr) {
  let modArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    modArr.push(arr[i]);
  }
  return modArr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

/**
 *
 * @param {Array} arr of arrays
 * @param {Array} correctAnswers
 * @returns {Array} count of the correct answers
 */
function scoreExams(arr, correctAnswers) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == correctAnswers[j]) {
        count++;
      }
    }
    newArr.push(count);
  }
  return newArr;
}

console.log(
  scoreExams(
    [
      [1, 1, 2, 4],
      [2, 1, 2, 2],
      [3, 1, 3, 4],
    ],
    [3, 1, 2, 4]
  )
);
