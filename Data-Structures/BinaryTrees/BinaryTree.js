class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  // breadth-first to ensure a complete tree
  insert(value) {
    let node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      this.size++;
      return;
    }

    // start our queue out with the root node
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();

      // check on current's left child
      if (!current.left) {
        current.left = node;
        this.size++;
        return;
      } else {
        queue.push(current.left);
      }

      // check on current's right child
      if (!current.right) {
        current.right = node;
        this.size++;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  // search for value in tree, using DFS (Pre-order)
  // returns true if found
  searchPreOrder(value) {
    function traverse(current) {
      // Base cases: nothing or found the value!
      if (!current) { return false; }
      if (current.value === value) { return true; }

      // now the recursive cases
      return (traverse(current.left) || traverse(current.right));
    }

    return traverse(this.root);
  }

  // search for value in tree, using DFS (In-order)
  // returns true if found
  searchInOrder(value) {
    function traverse(current) {
      // Base cases: nothing or found the value!
      if (!current) { return false; }

      // in-order recursive cases
      if (traverse(current.left)) { return true; }
      if (current.value === value) { return true; }
      if (traverse(current.right)) { return true; }

      return  false;
    }

    return traverse(this.root);
  }

  // search for value in tree, using DFS (Post-order)
  // returns true if found
  searchPostOrder(value) {
    function traverse(current) {
      // Base cases: nothing or found the value!
      if (!current) { return false; }

      // now the recursive cases
      if(traverse(current.left) || traverse(current.right)) { return true; }
      if (current.value === value) { return true; }

      return false;
    }

    return traverse(this.root);
  }
}

document.addEventListener("DOMContentLoaded", main);
function main() {
  let tree = new BinaryTree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(3);
  tree.insert(4);
  tree.insert(5);
  console.log(tree.root)
  console.log(tree.searchPreOrder(3));
  console.log(tree.searchInOrder(6));
  console.log(tree.searchPostOrder(3));
}
