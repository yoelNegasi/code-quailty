"use strict";

module.exports = { copyArray, concat, findMin, combineObjs };

const oldArr = [1, 2, 3];
function copyArray(arr) {
  let newArr = [...oldArr];
  return newArr;
}
console.log(copyArray(oldArr));
function concat(arr1, arr2) {
  let x = [...arr1, ...arr2];
  return x;
}
console.log(concat([1, 2, 3], [4, 5, 6]));

let arr1 = [1, 3, 4];
function concatnateElement() {
  let x = [...arr1, 2];
  return x;
}
console.log(concatnateElement());

function findMin(...numbers) {
  let min = Math.min(...numbers);
  return min;
}
console.log(findMin(5, 2, 3, 4));

function findMax(...numbers) {
  let max = Math.max(...numbers);
  return max;
}
console.log(findMax(1, 2, 3, 9));

function combineObjs(obj1, obj2) {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
}
