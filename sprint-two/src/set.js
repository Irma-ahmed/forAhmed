class Set {
  constructor() {
    this._storage = {};
    this._index = 0
  }

  add(item) {
    let storage = this._storage
    if(!this.contains(item)) {
      storage[this._index++] = item
    }
  }
  
  contains(item) {
    let storage = this._storage
    for(let k in storage) {
      const element = storage[k]
      if(element === item) {
        return true
      }
    }
    return false
  }
  
  remove(item) {
    let storage = this._storage
    if(this.contains(item)) {
      for(let k in storage) {
        const element = storage[k]
        if(element === item) {
          let deleted = element
          delete storage[k]
          return deleted
        }
      }
    }
  }
}