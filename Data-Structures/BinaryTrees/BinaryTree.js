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

  insert(value) {
    let node = new TreeNode(value);
  }
}
