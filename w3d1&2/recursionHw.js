"use strict";

module.exports = {
  sumTo,
  factorial,
  fibonacci,
  outputList,
  outputListLoop,
  reverseList,
  reverseListLoop,
};

function sumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}
console.log(sumTo(5));

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(10));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function outputListLoop(list) {
  let x = " ";
  do {
    x = x + " " + list.value;
    list = list.next;
  } while (list);
  console.log(x + " printed to console");
}

outputListLoop(list);

function outputList(list) {
  console.log(list.value);
  if (list.next) {
    outputList(list.next);
  }
}

outputList(list);

function reverseList(list) {
  if (list.next) {
    reverseList(list.next);
  }
  console.log(list.value);
}

reverseList(list);

function reverseListLoop(list) {
  let mike = [];

  while (list) {
    mike.push(list.value);
    list = list.next;
  }
  for (let i = mike.length - 1; i <= 0; i--) {
    console.log(mike[i]);
  }
}
reverseListLoop(list);

let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null,
};
let node4 = {
  name: "label",
  value: "Name",
  children: null,
};
let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null,
};
let node2 = {
  name: "div",
  value: null,
  children: [node4, node5],
};
let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};

function printNameValue(mike) {
  for (let key in mike) {
    if (Array.isArray(mike[key])) {
      for (let key2 of mike[key]) {
        printNameValue(key2);
      }
    } else {
      console.log(mike.name + ": " + mike.value);
    }
  }
}
printNameValue(node1);

let myArray = [];

function nameValue(node) {
  for (let key in node) {
    if (Array.isArray(node[key])) {
      for (let key2 of node[key]) {
        nameValue(key2);
      }
    } else {
      myArray.push(node.name + ": " + node.value);
    }
  }
  return myArray;
}

console.log(nameValue(node1));
