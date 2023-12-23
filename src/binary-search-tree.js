const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree
  }

  add(data) {
    function insertNode(node, data) {
      if (node === null) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = insertNode(node.left, data);
      } else {
        node.right = insertNode(node.right, data);
      }
      return node;
    }
    this.tree = insertNode(this.tree, data);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    function nodeSearch(node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) return node;
      if (data > node.data) {
        return nodeSearch(node.right, data);
      } else {
        return nodeSearch(node.left, data);
      }
    };
    return nodeSearch(this.tree, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (node === null || (node.left === null && node.right === null)) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      let minRightNode = node.right;
      while (minRightNode.left) {
        minRightNode = minRightNode.left;
      }
      node.data = minRightNode.data;
      node.right = removeNode(node.right, minRightNode.data);
      return node;
    };
    this.tree = removeNode(this.tree, data);
  }

  min() {
    if (this.tree === null) return null;
    let currTree = this.tree;
    while (currTree.left) {
      currTree = currTree.left;
    }
    return currTree.data;
  }

  max() {
    if (this.tree === null) return null;
    let currTree = this.tree;
    while (currTree.right) {
      currTree = currTree.right;
    }
    return currTree.data;
  }
}

module.exports = {
  BinarySearchTree
};