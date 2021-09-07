module.exports = { double, times100, myMap };
/**
 *
 * @param {number} number
 * @returns  number * 2
 */
function double(number) {
  return number * 2;
}
/**
 *
 * @param {number} number
 * @returns  number * 100
 */
function times100(number) {
  return number * 100;
}
console.log(times100(-10));

/**
 *
 * @param {arr} arr
 * @param {fun} function
 * @returns  arr applied by the function param
 */
function myMap(arr, fun) {
  let newArr = [];
  for (let ele of arr) {
    newArr.push(fun(ele));
  }
  return newArr;
}

console.log(myMap([1, 2, 3], double));
console.log(myMap([1, 2, 3], times100));
console.log(
  myMap([1, 2, 3], function (num) {
    return num * 3;
  })
);
