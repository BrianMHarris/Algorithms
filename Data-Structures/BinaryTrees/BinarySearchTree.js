/*  Binary Search Tree
 *
 *
 *
 */


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(value) {
    let node = new TreeNode(value);
    let current = this.root;

    // garbage in, garbage out
    if (!value && value !== 0) { return undefined; }

    // make sure this isn't an empty bst
    if (!this.root) {
      this.root = node;
      return;
    }

    // traverse the tree and insert the node where necessary
    while (current) {
      if (value < current.value) {
        // if there is already a node there, keep going down the tree
        if (current.left) {
          current = current.left;
          continue;
        }
        // otherwise insert the node
        current.left = node;
        break;
      } else {
        // if there is already a node there, keep going down the tree
        if (current.right) {
          current = current.right;
          continue;
        }
        // otherwise insert the node
        current.right = node;
        break;
      }
    }
    ++this.size; // keep track of the size!
  }

  remove(value) {
    let current = this.root;
    let parent = null;
    let replacer = null;

    // move until we find the correct node
    while(current && current.value !== value) {
      // keep tracking that parent
      parent = current;
      // move down the tree!
      current = (value < current.value) ? current.left : current.right;
    }

    // we have the current or not! (extra checks in case)
    if (!current || current.value !== value) { return undefined; }

    // if both right and left exist for our current,
    // must find the minimum value of a node from here
    if (current.left) {
      // use a WHILE above, go all the way left you can,
      // stitch together left's farthest right and the right from the node
      // we're removing
    }
  }

  contains(value) {

  }

  serialize() {
    let result = [];

    return arr;
  }
}
