// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
    // this.head = new Node(data, this.head);
  }

  size() {
    let size = 0;
    let node = this.head;

    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.getAt(this.size() - 1);
    // let node = this.head;

    // while (node && node.next) {
    //   node = node.next;
    // }
    // return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head ? this.head.next : null;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
      // this.insertFirst(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    const previous = this.getAt(index - 1);
    if (previous && previous.next) {
      previous.next = previous.next.next;
    }
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous) {
      this.insertLast(data);
      return;
    }

    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // *[Symbol.iterator]() {
  //   let node = this.head;
  //   while (node) {
  //     yield node;
  //     node = node.next;
  //   }
  // }
}

module.exports = { Node, LinkedList };
