const BST = require("./bst");
const Queue = require("./Queue");

// No parameters given for how the libraries data was currently organized. Code written with the assumption that the dewey decimal
// designation would be given as a string, and that the librarys data would be given as an array of objects of the dewey decimal
// classifications, with each fiunal layer of classifications
// having an array of books.

function checkDewey(deweyString, title, library) {
  let deweyArray = deweyString.split(".");
  if (deweyArray.length === 0) {
    for (let i = 0; i < library.length; i++) {
      if (library[i].title === title) {
        return library[i];
      }
    }
    return "Not found";
  }

  for (let i = 0; i < library.length; i++) {
    if (library[i].designation === deweyArray[0]) {
      deweyArray.shift();
      return checkDewey(deweyArray.join("."), title, library[i].catalog);
    }
  }
}

function inOrder(tree, result = []) {
  if (tree.left !== null) {
    inOrder(tree.left, result);
  }
  result.push(tree.key);
  if (tree.right !== null) {
    inOrder(tree.right, result);
  }
  return result;
}

function preOrder(tree, result = []) {
  result.push(tree.key);
  if (tree.left !== null) {
    preOrder(tree.left, result);
  }

  if (tree.right !== null) {
    preOrder(tree.right, result);
  }
  return result;
}
function postOrder(tree, result = []) {
  if (tree.left !== null) {
    postOrder(tree.left, result);
  }

  if (tree.right !== null) {
    postOrder(tree.right, result);
  }
  result.push(tree.key);
  return result;
}

function bfs(tree) {
  const queue = [tree];
  let values = [];
  while (queue.length) {
    const node = queue.shift();
    values.push(node.value);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return values;
}
function maxProfit(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let profit = arr[i] - arr[j];
      if (profit > result) {
        result = profit;
      }
    }
  }
  return result;
}
function main() {
  let test = new BST();
  test.insert(25, 25);
  test.insert(15, 15);
  test.insert(50, 50);
  test.insert(10, 10);
  test.insert(24, 24);
  test.insert(35, 35);
  test.insert(70, 70);
  test.insert(4, 4);
  test.insert(12, 12);
  test.insert(18, 18);
  test.insert(31, 31);
  test.insert(44, 44);
  test.insert(66, 66);
  test.insert(90, 90);
  test.insert(22, 22);
  //console.log(test);
  //console.log(inOrder(test));
  //console.log(preOrder(test));
  // console.log(postOrder(test));
  let command = new BST();
  command.insert(5, "Captain Picard");
  command.insert(6, "Commander Data");
  command.insert(8, "Lt. Cmdr Crusher");
  command.insert(3, "Commander Riker");
  command.insert(2, "Lt. Cmdr Worf");
  command.insert(4, "Lt Cmdr LaForge");
  command.insert(1, "Lieutenant Security-Officer");
  command.insert(7, "Lieutenant Selar");
  //console.log(bfs(command));
  console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));
}
main();
