
function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

var test = new BinaryTreeNode(5);
var left = test.insertLeft(3);
left.insertLeft(2)
test.insertRight(9);

function balanced(bst) {
  var level = 0; 
  if(bst.left)
}