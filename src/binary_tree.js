/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.
The last method lowestCommonAncestor is optional. Complete it only if you could tackle all the rest.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // adds node to left if value is less than or equal to this.value
  // adds node to right if value is greater than node
  add(value) {
    //let newNode = BinaryTree (value);
    if (value < this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new BinaryTree(value);
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new BinaryTree(value);
      }
    }
  }

  // returns true or false if the value is in the tree
  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (this.right && this.right.contains(value)) {
      return true;
    }
    if (this.left && this.left.contains(value)) {
      return true;
    }
    return false;
  }

  // apply callback in this order: left node, current node, right node
  traverseDepthFirstInOrder(fn) {
    if (this.left) {
      this.left.traverseDepthFirstInOrder(fn);
    }

    fn(this);

    if (this.right) {
      this.right.traverseDepthFirstInOrder(fn);
    }
  }

  // apply callback from left to right across each level
  // hint: use a queue for this!
  traverseBreadthFirst(fn) {
    let queue = [];
    queue.push(this);
    while (queue.length) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      fn(node);
    }
  }

  // OPTIONAL
  // Finds the lowest common ancestor given 2 node values
  // restrictions: val1 < val2
  // return the LCA (the node)
  // returns null if any of the values are not in the tree
  lowestCommonAncestor(val1, val2) {}
}

module.exports = BinaryTree;
