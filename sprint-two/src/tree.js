var Tree = function (value) {
  this._value = value;
  this._children = [];
};

Tree.prototype.addChild = function (val) {
  const newChild = new Tree(val)
  if (this._children.length <= 2){
    this._children.push(newChild)
  }
};

Tree.prototype.contains = function (target) {
  if (this._value === target) {
    return true;
  }
  const children = this._children
  for (let child of children) {
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */