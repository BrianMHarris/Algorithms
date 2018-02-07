class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(head=null) {
    this.head = head;
    this.tail = this.head;
    this.size = 0;
  }

  enqueue(value) {
    var node = new QueueNode(value);

    if (this.size === 0) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    ++this.size;
  }

  dequeue() {
    var node = this.head;
    this.head = node.next;
    node.next = null;
    --this.size;
    return node;
  }
}
