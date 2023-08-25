var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._start = 0
  this._end = 0
  this._data = {}
};

Queue.prototype.enqueue = function (value) {
  this._data[this._end++] = value
};

Queue.prototype.dequeue = function () {
  if(this.size() > 0) {
    let deleted = this._data[this._start]
    delete this._data[this._start++]
    return deleted
  }
};

Queue.prototype.size = function () {
  return this._end - this._start
};