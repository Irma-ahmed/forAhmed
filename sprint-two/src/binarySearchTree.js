class BinarySearchTree {
  constructor(value) {
    this._left = null
    this._right = null
    this._value = value
  }
  insert(val) {
    if (val < this._value) {
      if (this._left === null) {
        this._left = new BinarySearchTree(val)
      } else {
        // still needs some work here (that makes the tree more orginized)
        this._left.insert(val)
        // still needs some work here (that makes the tree more orginized)
      }
    } else {
      if (this._right === null) {
        this._right = new BinarySearchTree(val)
      } else {
        // still needs some work here (that makes the tree more orginized)
        this._right.insert(val)
        // still needs some work here (that makes the tree more orginized)
      }
    }
  }
  contains(val) {
    if(val === this._value) {
      return true
    }
    else if(val < this._value) {
      return this._left !== null && this._left.contains(val)
    }
    else if(val > this._value) {
      return this._right !== null && this._right.contains(val)
    }
  }
  depthFirstLog(callBack) {
    callBack(this._value)
    if(this._left) {
      this._left.depthFirstLog(callBack)
    }
    if(this._right) {
      this._right.depthFirstLog(callBack)
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */