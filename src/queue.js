const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor (){
    this.firstEl;
    this.lastEl;
  }

  getUnderlyingList() {
    return this.firstEl;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.firstEl) {
      this.firstEl = newNode;
    }
    if (this.lastEl) {
      this.lastEl.next = newNode;
    }
    this.lastEl = newNode;
  }

  dequeue() {
    let retFirst = this.firstEl;
    this.firstEl = retFirst.next;
    return retFirst.value
}
}

module.exports = {
  Queue
};
