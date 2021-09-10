"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {
  ucFirst,
  getMaxSubSum,
  truncate,
  camelize,
  checkSpam,
  extractCurrencyValue,
}; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//   console.log(ucFirst("mike"));

function checkSpam(str) {
  let x = str.toLowerCase();
  if (x.includes("viagra" || x.includes("xxxxx"))) {
    return true;
  } else {
    return false;
  }
}

function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + "...";
  }
}
function extractCurrencyValue(str) {
  return Number(str.slice(1));
}

console.log;

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let initialSum = 0;
  let totalSum = 0;

  for (let key of arr) {
    initialSum += key;
    totalSum = Math.max(totalSum, initialSum);
    if (initialSum < 0) {
      initialSum = 0;
    }
  }
  return totalSum;
}
//   console.log(getMaxSubSum([1,2,3]))

function camelize(str) {
  return str
    .split("-")
    .map((element, index) => {
      if (index == 0) {
        return element;
      } else {
        return element[0].toUpperCase() + element.slice(1);
      }
    })
    .join("");
}
