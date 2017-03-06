function BinaryTreeNode(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinaryTreeNode.prototype.insert = function(value){
  const newNode = new BinaryTreeNode(value);

  if(newNode.value > this.value) {
    if(this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(value)
    }
  } else {
    if(this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(value)
    }
  }
  return newNode;
}

BinaryTreeNode.prototype.largest = function(bst) {
  console.log(bst)
  if(!bst.right) {
    return bst.value;
  }
  var btree = bst.right
  while(bst) {
    if(bst.right === null) {
      return bst.value;
    }
    bst = bst.right;
  }
}

BinaryTreeNode.prototype.secondLargest = function(bst) {
  var current = bst;
  while(current) {
   if(!current.right && current.left) {
    return this.largest(current.left);
   }

   if(current.right && !current.right.left && !current.right.right){
    return current.value;
   }
   current = current.right;
  }
}

var mine = new BinaryTreeNode(10);
mine.insert(50);
mine.insert(25);
mine.insert(30)
console.log(mine.secondLargest(mine));