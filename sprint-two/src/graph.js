// Instantiate a new graph
var Graph = function () {
  this._nodes = {};
  this.id = 0
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this._nodes[this.id] = {value:node, connection:[]}
  this.id++
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return Object.values(this._nodes).map(e => e.value).includes(node)
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for(let k in this._nodes) {
    if(this._nodes[k] === node) {
      delete this._nodes[k]
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  if(this.contains(fromNode) && this.contains(toNode)) {
    for(let k in this._nodes) {
      if(this._nodes[k].value === fromNode) {
        var node1 = this._nodes[k]
      }
      if(this._nodes[k].value === toNode) {
        var node2 = this._nodes[k]
      }
    }
    for(let k in this._nodes) {
      if(this._nodes[k].value === fromNode) {
        this._nodes[k].connection.push(node2)
      }
      if(this._nodes[k].value === toNode) {
        this._nodes[k].connection.push(node1)
      }
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for(let k in this._nodes) {
    const node = this._nodes[k]
    cb(node)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//////////////////////////////////////////////////////////////////


let ahmed = new Graph()
ahmed.addNode(1)
ahmed.addNode(5)
ahmed.addEdge(1, 5)
console.log(ahmed);