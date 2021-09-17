module.exports = {
  doubleNums,
  filterEven,
  filterOver10,
  findEvenNum,
  findEvenAge,
};

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [
  { name: "Sam", age: 15 },
  { name: "William", age: 6 },
  { name: "Lucy", age: 13 },
  { name: "Barney", age: 80 },
];

function doubleNums(arr) {
  return arr.map((item) => item * 2);
}
//console.log(doubleNums(numArray));

function filterEven(arr) {
  return arr.filter((item) => item % 2 == 0);
}
//console.log(filterEvenNum(numArray));

function filterOver10(arr) {
  return arr.filter((item) => item.age > 10);
}
//console.log(findAllAgesAbove10(peopleArray));

function findEvenNum(arr) {
  return arr.find((item) => item % 2 == 0);
}
//console.log(findEven(numArray));

function findEvenAge(arr) {
  return arr.find((item) => item.age % 2 == 0);
}
//console.log(findAgeabove10(peopleArray));
