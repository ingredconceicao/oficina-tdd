class Queue {
  constructor() {
    this.elements = [];
  }

  size() {
    return this.elements.length;
  }

  add(item) {
    this.elements.push(item);
  }

  peek() {
    return this.elements.length > 0 ? this.elements[0] : null;
  }

  dequeue() {
    return this.elements.length > 0 ? this.elements.shift() : null;
  }
}

module.exports = Queue;
