class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = head;
    this.tail = this.head;
  }

  // Time Complexity: O(1)
  // Space Complexity: O(1)
  insert(value) {
    let node = new ListNode(value);

    if (!value && value !== 0) { return; }

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  // Time Complexity: O(1)
  // Space Complexity: O(1)
  insertFirst(value) {
    let node = new ListNode(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  // Time Complexity: O(n)
  // Space Complexity: O(1)
  // return: the node removed or undefined
  remove(value) {
    let current = this.head;
    let prev = null; // could be set to this.head but we'll be super explicit

    if (!this.head) { return; }

    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }

    // if we're here, we've either run to the end, or found it
    if (current) {
      // if there was a previous, stitch it up
      if (prev) {
        prev.next = current.next;
      } else { // no previous?
        if (this.head === current) {
          this.head = current.next;
        }
      }

      // move tail pointer if it's current
      if (this.tail === current) {
        this.tail = prev;
      }

      return current;
    }
  }

  // Time Complexity: O(n)
  // Space Complexity: O(1)
  // return: returns node searched for, or null if not found
  search(value) {
    let current = this.tail;

    // iterate and look for the value
    while (current) {
      if (value === current.value) { return current; } // found it!
      current = current.next;
    }
    return null;
  }
}
