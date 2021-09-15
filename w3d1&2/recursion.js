function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

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

let array = [];
function listNames(tree, name) {
  for (let key in tree) {
    if (Array.isArray(tree[key])) {
      for (let key2 of tree[key]) {
        listNames(key2);
      }
    } else {
      array.push(tree.value);
    }
  }

  for (let item of array) {
    if (item == name) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(listNames(abe, "Lisa"));

function findSubtree(tree) {
  for (let key in tree) {
    if (Array.isArray(tree[key])) {
      for (let key2 of tree[key]) {
        findSubtree(key2);
      }
    } else {
      console.log(tree.value);
    }
  }
}
findSubtree(abe);

let list = { name: "Abe" };
list.next = { name: "Homer" };
list.next.next = { name: "Bart" };
list.next.next.next = { name: "Lisa" };
list.next.next.next.next = { name: "Maggie" };

console.log(list);
