const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
module.exports = class BinarySearchTree {
  constructor()
    {
        this.node = null;
    }
  
    root() {
      return this.node;
    }
  
    add(data) {
      var newNode = new Node(data);
        if (this.node === null)
        this.node = newNode;
        else
        this.addTreeNode(this.node, newNode)
    }
    addTreeNode(tree, newNode){
      if (newNode.data < tree.data){
        if (tree.left === null)
          tree.left = newNode;
        else this.addTreeNode(tree.left, newNode);
      }
      else{
        if (tree.right === null)
          tree.right = newNode;
        else
          this.addTreeNode(tree.right, newNode)
      }
    }
  
    has(data) {
      if (this.find(data) !== null) return true
      else return false
    }
  
    find(data) {
      return this.search(this.node, data);
    }
    search(tree, data){
      if (tree === null)
        return null;
      else if(data < tree.data)
        return this.search(tree.left, data);
      else if(data > tree.data)
        return this.search(tree.right, data);
      else 
        return tree;
  
    }
  
  
    remove(data) {
      this.node = this.removeNode(this.node, data);
    }
    removeNode(tree, data)
    {
      if (tree === null)
        return null;
    
      else if (data > tree.data){
        tree.right = this.removeNode(tree.right, data)
        return tree
      }
      else if (data < tree.data){
        tree.left = this.removeNode(tree.left, data)
        return tree
      }
      else {
        if(tree.left === null && tree.right === null){
          tree = null;
          return tree;
        }
        if (tree.left === null){
          tree = tree.right;
          return tree;
        }
        else if(tree.right === null){
          tree = tree.left;
          return tree;
        }
        var aux = this.findMin(tree.right);
          tree.data = aux.data;
   
          tree.right = this.removeNode(tree.right, aux.data);
          return tree;
      }
    }
  
    min() {
      return this.findMin(this.node).data;
    }
    findMin(tree){
      if (tree.left === null)
        return tree
      else
        return this.findMin(tree.left);
    }
    max() {
      return this.findMax(this.node).data;
    }
    findMax(tree){
      if (tree.right === null)
        return tree
      else
        return this.findMax(tree.right);
    }
  }