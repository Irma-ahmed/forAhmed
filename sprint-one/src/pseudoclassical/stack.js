var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._current = 0
  this._data = {}
};

Stack.prototype.push = function (value) {
  this._data[this._current++] = value
};

Stack.prototype.pop = function () {
  if(this.size() > 0) {
    let deleted = this._data[--this._current]
    delete this._data[this._current]
    return deleted
  }
};

Stack.prototype.size = function () {
  return this._current
};