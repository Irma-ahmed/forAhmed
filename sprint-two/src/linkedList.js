class LinkedList {
  constructor() {
    this._head = null
    this._tail = null
  }

  addToTail(value) {
    let newNode = new Node(value)
    if(!this._head) {
      this._head = newNode
    } else {
     this._tail._next = newNode
    }
    this._tail = newNode
  }

  removeHead() {
    if(this._head) {
      let prevHead = this._head
      this._head = prevHead._next
      return prevHead._value
    }
  }

  contains(target, start = this._head) {
    if(start._value === target) {
      return true
    }
    if(start === this._tail) {
      return false
    }
    if(start._next._value === target) {
      return true
    }
    return this.contains(target, start._next)
  }
}

class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */