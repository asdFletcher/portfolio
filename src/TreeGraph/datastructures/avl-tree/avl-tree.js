import Node from "./avl-tree-node.js";

class AVLTree {
  constructor(){
    this.root = null;
    this.insertComputations = 0;
    this.removeComputations = 0;
    this.containsComputations = 0;
    this.findMaxComputations = 0;
    this.findMinComputations = 0;
    this.printComputations = 0;
    
    this.imbalancedNode = null;
    this.imbalancedNodeParent = null;
  }

  insert(value){
    this.insertComputations = 0;

    if (!this.isNumericInput(value)){ return undefined; }
    value = Number(value);

    let newNode = new Node(value);

    if (this.treeIsEmpty()){ 
      this.root = newNode;
      return newNode;
    }

    const _go = (node) => {
      this.insertComputations++;
      if (value === node.value) { return undefined; } // value already in tree

      // add right node
      if (!node.right && value > node.value ){
        node.right = newNode;
        this.updateNodeHeight(node);
        return newNode;
      }
      // add left node
      if (!node.left && value < node.value ){
        node.left = newNode;
        this.updateNodeHeight(node);
        return newNode;
      }
      
      let result;
      // navigate right
      if (value > node.value){
        result = _go(node.right);
      } else if (value < node.value){
        // navigate left
        result = _go(node.left);
      }
      
      // done with recursion
      this.fixImbalances(node);
      this.setImbalancedNode(node);
      this.updateNodeHeight(node);
      return result;
    };
    
    let result = _go(this.root);

    this.handleRootImbalance();

    this.imbalancedNode = null;
    this.imbalancedNodeParent = null;
    return result;
  }

  remove(value){
    if (!this.isNumericInput(value)){ return undefined; }
    value = Number(value);

    if (this.treeIsEmpty()){ return undefined; }

    this.removeComputations = 0;

    if(this.root.value === value){
      if(!this.root.left && !this.root.right){
        let result = this.root;
        this.root = null;
        return result;
      }
    }
    const _go = (node) => {
      this.removeComputations++;

      let result;

      // root node is the value
      if(node.value === value){
        // located node to be deleted
        result = new Node(node.value);
        
        // remove the node
        this.root = this.removeNode(node);
        this.fixImbalances(node);
        if ( this.root ) { this.updateNodeHeight(this.root); }

        return result;
      }

      if (node.right && node.right.value === value){
        // located node to be deleted
        result = new Node(node.right.value);

        // remove the node
        node.right = this.removeNode(node.right);
        if ( node.right) { this.updateNodeHeight(node.right); }
        this.updateNodeHeight(node);

        // check for problem nodes
        this.setImbalancedNode(node);

        return result;
      }
      if (node.left && node.left.value === value){
        // located node to be deleted
        result = new Node(node.left.value);

        // remove the node
        node.left = this.removeNode(node.left);
        if ( node.left) { this.updateNodeHeight(node.left); }
        this.updateNodeHeight(node);
        
        // check for problem nodes
        this.setImbalancedNode(node);

        return result;
      }

      // navigate right
      if (value > node.value){
        if(!node.right) { return undefined; }
        result = _go(node.right);
      } else if (value < node.value){
        // navigate left
        if(!node.left) { return undefined; }
        result = _go(node.left);
      }
      
      // done with recursion
      this.fixImbalances(node);
      this.setImbalancedNode(node);
      
      // this.imbalancedNode = null;

      this.updateNodeHeight(node);
      return result;
    };
    
    let result = _go(this.root);

    // root is gone
    if(!this.root){ return result; }
    
    this.handleRootImbalance();
    this.imbalancedNode = null;
    this.imbalancedNodeParent = null;

    return result;
  }

  removeNode(node){
    // if leaf, remove
    if (!node.left && !node.right){
      return null;
    }

    // if two children --> Find sub tree min or max --> replace that node
    if (node.left && node.right){
      return this.removeNodeWithTwoChildren(node);
    }

    // if only one child, make that child the new node
    if (node.left){
      return node.left;
    }
    return node.right;

  }

  removeNodeWithTwoChildren(node){
    
    let maxNodeValueOfSubTree;
    let minNodeValueOfSubTree;

    const _deleteMin = (node) => {

      this.removeComputations++;
      // base case
      if(!node.left){
        minNodeValueOfSubTree = node.value;
        if(!node.right){
          return null;
        }
        return node.right;
      }

      let result = _deleteMin(node.left);

      if (result === true) {
        this.fixImbalances(node);
        this.setImbalancedNode(node);
        this.updateNodeHeight(node);
        return result;
      } else {
        node.left = result;
        this.updateNodeHeight(node);
        if (node.left) { this.updateNodeHeight(node.left); }
        this.setImbalancedNode(node);
        return true;
      }
    };
    
    const _deleteMax = (node) => {
      this.removeComputations++;
      // base case
      if(!node.right){
        maxNodeValueOfSubTree = node.value;
        if(!node.left){
          return null;
        }
        return node.left;
      }

      let result = _deleteMax(node.right);

      if (result === true) {
        this.fixImbalances(node);
        this.setImbalancedNode(node);
        this.updateNodeHeight(node);
        return result;
      } else {
        node.right = result;
        this.updateNodeHeight(node);
        if (node.right) { this.updateNodeHeight(node.right); }
        this.setImbalancedNode(node);
        return true;
      }
    };

    let result;
    if (node.left.height > node.right.height){
      result = _deleteMax(node.left);
      node.value = maxNodeValueOfSubTree;
      if (result === true) {
        this.fixImbalances(node);
        this.setImbalancedNode(node);
      } else {
        node.left = result;
        this.updateNodeHeight(node);
        if (node.left) { this.updateNodeHeight(node.left); }
        this.setImbalancedNode(node);
      }
    } else {
      result = _deleteMin(node.right);
      node.value = minNodeValueOfSubTree;
      if (result === true) {
        this.fixImbalances(node);
        this.setImbalancedNode(node);
      } else {
        node.right = result;
        this.updateNodeHeight(node);
        if (node.right) { this.updateNodeHeight(node.right); }
        this.setImbalancedNode(node);
      }
    }
    return node;
  }

  handleRootImbalance(){
    if (this.isImbalanced(this.root)){
      this.performRotations(this.root);
      this.imbalancedNode = null;
      this.imbalancedNodeParent = null;
    }

    if(this.root.left && this.isImbalanced(this.root.left)){
      this.imbalancedNode = this.root.left;
      this.imbalancedNodeParent = this.root;
      this.fixImbalances(this.root);
    }
    if(this.root.right && this.isImbalanced(this.root.right)){
      this.imbalancedNode = this.root.right;
      this.imbalancedNodeParent = this.root;
      this.fixImbalances(this.root);
    }
  }

  fixImbalances(node){
    if (this.imbalancedNode){
      let problemNodeDirection = this.getProblemNodeDirection(node, this.imbalancedNode);
      this.performRotations(this.imbalancedNode, node, problemNodeDirection);

      while (this.imbalancedNode){
        let node = this.imbalancedNode;
        let parent = this.imbalancedNodeParent;
        let problemNodeDirection = this.getProblemNodeDirection(parent, node);
        this.performRotations(node, parent, problemNodeDirection);
      }

      this.imbalancedNode = null;
      this.imbalancedNodeParent = null;
    }
  }

  getProblemNodeDirection(node, imbalancedNode){
    if (node && node.left && node.left.value === imbalancedNode.value){
      return 'left';
    }
    if (node && node.right && node.right.value === imbalancedNode.value){
      return 'right';
    }
  }

  performRotations(originalRoot, parentNode, problemNodeDirection){
    let leftHeight = this.getHeight(originalRoot.left);
    let rightHeight = this.getHeight(originalRoot.right);

    if (leftHeight - rightHeight >= 2){
      this.handleLeftImbalance(originalRoot, parentNode, problemNodeDirection);
    }
    
    if (rightHeight - leftHeight >= 2){
      this.handleRightImbalance(originalRoot, parentNode, problemNodeDirection);
    }
  }

  handleRightImbalance(originalRoot, parentNode, problemNodeDirection){
    let rightChild = originalRoot.right;
    let rightChildLeftHeight = this.getHeight(rightChild.left);
    let rightChildRightHeight = this.getHeight(rightChild.right);

    if (rightChildRightHeight > rightChildLeftHeight){
      this._handleSingleRightRotation(originalRoot, parentNode, problemNodeDirection);
    } else {
      this._handleDoubleRightRotation(originalRoot, parentNode, problemNodeDirection);
    }
  }

  handleLeftImbalance(originalRoot, parentNode, problemNodeDirection){
    let leftChild = originalRoot.left;
    let leftChildLeftHeight = this.getHeight(leftChild.left);
    let leftChildRightHeight = this.getHeight(leftChild.right);

    if (leftChildLeftHeight > leftChildRightHeight){
      this._handleSingleLeftRotation(originalRoot, parentNode, problemNodeDirection);
    } else {
      this._handleDoubleLeftRotation(originalRoot, parentNode, problemNodeDirection);
    }
  }

  _handleDoubleLeftRotation(originalRoot, parentNode, problemNodeDirection){
    let leftSubTree;
    let rightSubTree;
    let newRoot;

    if (!parentNode){
      rightSubTree = this.root;
      leftSubTree = originalRoot.left;
      newRoot = leftSubTree.right;

      leftSubTree.right = newRoot.left;
      rightSubTree.left = newRoot.right;
      newRoot.left = leftSubTree;
      newRoot.right = rightSubTree;
      this.root = newRoot;
    } else {
      rightSubTree = originalRoot;
      leftSubTree = originalRoot.left;
      newRoot = leftSubTree.right;
  
      leftSubTree.right = newRoot.left;
      rightSubTree.left = newRoot.right;
      newRoot.left = leftSubTree;
      newRoot.right = rightSubTree;
      parentNode[problemNodeDirection] = newRoot;
    }

    this.updateNodeHeight(leftSubTree);
    this.updateNodeHeight(rightSubTree);
    this.updateNodeHeight(newRoot);

    this.imbalancedNode = null;
    this.imbalancedNodeParent = null;
    this.setImbalancedNodeFromParent(newRoot);
  }

  _handleDoubleRightRotation(originalRoot, parentNode, problemNodeDirection){
    let leftSubTree;
    let rightSubTree;
    let newRoot;

    if (!parentNode){
      leftSubTree = this.root;
      rightSubTree = originalRoot.right;
      newRoot = rightSubTree.left;

      leftSubTree.right = newRoot.left;
      rightSubTree.left = newRoot.right;
      newRoot.left = leftSubTree;
      newRoot.right = rightSubTree;
      this.root = newRoot;

    } else {
      leftSubTree = originalRoot;
      rightSubTree = originalRoot.right;
      newRoot = rightSubTree.left;
  
      leftSubTree.right = newRoot.left;
      rightSubTree.left = newRoot.right;
      newRoot.left = leftSubTree;
      newRoot.right = rightSubTree;
      parentNode[problemNodeDirection] = newRoot;
    }

    this.updateNodeHeight(leftSubTree);
    this.updateNodeHeight(rightSubTree);
    this.updateNodeHeight(newRoot);

    this.imbalancedNode = null;
    this.imbalancedNodeParent = null;
    this.setImbalancedNodeFromParent(newRoot);
  }

  _handleSingleLeftRotation(originalRoot, parentNode, problemNodeDirection){
    let newRoot = originalRoot.left;
    originalRoot.left = newRoot.right;
    newRoot.right = originalRoot;

    if (!parentNode){
      this.root = newRoot;
    } else {
      parentNode[problemNodeDirection] = newRoot;
    }

    this.updateNodeHeight(newRoot.left);
    this.updateNodeHeight(newRoot.right);
    this.updateNodeHeight(newRoot);

    this.imbalancedNode = null;
    this.imbalancedNodeParent = null;
    this.setImbalancedNodeFromParent(newRoot);
  }

  _handleSingleRightRotation(originalRoot, parentNode, problemNodeDirection){
    let newRoot = originalRoot.right;
    originalRoot.right = newRoot.left;
    newRoot.left = originalRoot;
    
    if (!parentNode){
      this.root = newRoot;
    } else {
      parentNode[problemNodeDirection] = newRoot;
    }

    this.updateNodeHeight(newRoot.left);
    this.updateNodeHeight(newRoot.right);
    this.updateNodeHeight(newRoot);

    this.imbalancedNode = null;
    this.imbalancedNodeParent = null;
    this.setImbalancedNodeFromParent(newRoot);
  }

  getHeight(node){
    if(!node){ return -1; }
    return node.height;
  }

  setImbalancedNode(node){
    if (!this.imbalancedNode && this.isImbalanced(node)){
      this.imbalancedNode = node;
      // set parent?
    }
  }

  setImbalancedNodeFromParent(parentNode) {
    if(parentNode.left && this.isImbalanced(parentNode.left)){
      this.imbalancedNode = parentNode.left;
      this.imbalancedNodeParent = parentNode;
    }
    if(parentNode.right && this.isImbalanced(parentNode.right)){
      this.imbalancedNode = parentNode.right;
      this.imbalancedNodeParent = parentNode;
    }
  }

  isImbalanced(node){
    let leftHeight = this.getHeight(node.left);
    let rightHeight = this.getHeight(node.right);

    if (Math.abs(leftHeight - rightHeight) >= 2){
      return true;
    }
  }

  updateNodeHeight(node){
    if (!node.left && !node.right){
      node.height = 0;
      return;
    }
    if (!node.left){
      node.height = node.right.height + 1;
      return;
    }
    if (!node.right){
      node.height = node.left.height + 1;
      return;
    }
    if (node.left && node.right) {
      node.height = Math.max(node.left.height, node.right.height) + 1;
    }
  }

  treeIsEmpty(){
    if (!this.root) { return true; }
    return false;
  }

  isNumericInput(value){
    if (typeof value === 'boolean'){ return false; }

    let numericalValue = Number(value);

    if (isNaN(numericalValue)){ return false; }
    
    if ( typeof numericalValue === 'number' ) { return true; }
    return false;
  }

  contains(value){
    if (!this.isNumericInput(value)){ return undefined; }
    value = Number(value);

    if (this.treeIsEmpty()){ return false; }

    this.containsComputations = 0;

    const _go = (node) => {
      // base case
      this.containsComputations++;
      if(node.value === value){
        return true;
      }

      if (!node.left && !node.right) { return false; }
      
      if (value < node.value){
        if(node.left){
          return _go(node.left);
        }
        return false;
      }
      if (value > node.value){
        if(node.right){
          return _go(node.right);
        }
        return false;
      }
    };

    let result = _go(this.root);

    return result;
  }

  findMin(){
    if (this.treeIsEmpty()){ return undefined; }
    this.findMinComputations = 0;
    
    let current = this.root;

    while(current.left){
      this.findMinComputations++;
      current = current.left;
    }

    return current.value;
  }

  findMax(){
    if (this.treeIsEmpty()){ return undefined; }
    this.findMaxComputations = 0;
    
    let current = this.root;

    while(current.right){
      this.findMaxComputations++;
      current = current.right;
    }

    return current.value;
  }

  printPreOrder(){
    let result = [];

    if (this.treeIsEmpty()){ return result; }

    const _go = (node) => {
      result.push(node.value);
      if(node && node.left){ _go(node.left); }
      if(node && node.right){ _go(node.right); }
    };

    _go(this.root);

    return result;
  }

  printInOrder(){
    let result = [];

    if (this.treeIsEmpty()){ return result; }

    const _go = (node) => {
      if(node && node.left){ _go(node.left); }
      result.push(node.value);
      if(node && node.right){ _go(node.right); }
    };

    _go(this.root);

    return result;
  }

  printPostOrder(){
    let result = [];

    if (this.treeIsEmpty()){ return result; }

    const _go = (node) => {
      if(node && node.left){ _go(node.left); }
      if(node && node.right){ _go(node.right); }
      result.push(node.value);
    };

    _go(this.root);

    return result;
  }


  containsDuplicates(){
    let seen = new Set();
    let inOrderArray = this.printInOrder();

    for(let i = 0; i < inOrderArray.length; i++){
      let current = inOrderArray[i];
      
      if(seen.has(current)){
        return true;
      }
      seen.add(current);
    }
    return false;
  }

  containsHeightErrors(){
    let result = false;

    if (this.treeIsEmpty()){ return false; }

    const _go = (node) => {
      if(node && node.left){ _go(node.left); }
      if(node && node.right){ _go(node.right); }
      if(this.isImbalanced(node)){
        result = true;
      }
    };

    _go(this.root);

    return result;
  }

}

export default AVLTree;
