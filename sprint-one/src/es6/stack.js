class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._current = 0
    this._data = {}
  }
  push(value) {
    this._data[this._current++] = value
  }
  
  pop() {
    if(this.size() > 0) {
      let deleted = this._data[--this._current]
      delete this._data[this._current]
      return deleted
    }
  }

  size() {
    return this._current
  }
}