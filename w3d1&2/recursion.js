function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}
// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

// Q1
function listNames(tree) {
  for (let key in tree) {
    if (Array.isArray(tree[key])) {
      for (let key2 of tree[key]) {
        listNames(key2);
      }
    } else {
      console.log(tree.value);
    }
  }
}
listNames(abe);

// Q1
function listNames(tree) {
  console.log(tree.value);
  if (tree.descendents && tree.descendents.length > 0) {
    for (let key of tree.descendents) {
      listNames(key);
    }
  }
}
listNames(abe);

//Q2

function targetName(tree, name) {
  if (tree.value === name) {
    return true;
  } else if (tree.descendents && tree.descendents.length > 0) {
    for (let key of tree.descendents) {
      if (targetName(key, name)) {
        return true;
      }
    }
  }

  return false;
}
console.log(targetName(abe, "Lisa"));

//   Q3
function matchingTree(tree, name) {
  if (tree.value === name) {
    return tree;
  } else if (tree.descendents && tree.descendents.length > 0) {
    for (let key of tree.descendents) {
      let matchingnode = matchingTree(key, name);
      if (matchingnode) {
        return matchingnode;
      }
    }
  }
  return null;
}

console.log(matchingTree(abe, "Bart"));
// Q4

function ListNode(name, next) {
  this.name = name;
  this.next = next;
}

let list = new ListNode("Abe", homer);
list.next = new ListNode("Homer", bart);
list.next.next = new ListNode("Bart", lisa);
list.next.next.next = new ListNode("Lisa", maggie);

console.log(list);

// let list = {name :"Abe",next:{name:"Homer",next:{name:"Bart",next:{name:"Lisa",next:{name:"Maggie"}}}}}

// Q6

function treeModifiers(tree, cllbk) {
  console.log(cllbk(tree.value));
  if (tree.descendents && tree.descendents.length > 0) {
    for (let key of tree.descendents) {
      treeModifiers(key, cllbk);
    }
  }
}

function allCaps(item) {
  return item.toUpperCase();
}

function addStars(item) {
  return `***${item}***`;
}

function reverseNode(item) {
  return item.split("").reverse().join("");
}

console.log(treeModifiers(abe, addStars));
