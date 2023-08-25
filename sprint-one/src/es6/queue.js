class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._start = 0
    this._end = 0
    this._data = {}
  }

  enqueue(value) {
    this._data[this._end++] = value
  }

  dequeue() {
    if(this.size() > 0) {
      let deleted = this._data[this._start]
      delete this._data[this._start++]
      return deleted
    }
  }

  size() {
    return this._end - this._start
  }
}