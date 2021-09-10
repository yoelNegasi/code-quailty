"use strict";

module.exports = { copySorted, sortByAge, shuffle, getAverageAge };

function copySorted(arr) {
  let newArr = [...arr];
  return newArr.sort();
}

//   console.log(copySorted(["HTML", "JavaScript", "CSS"]))

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

//   console.log(arr[0].name)

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
