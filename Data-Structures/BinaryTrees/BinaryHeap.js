class BinaryHeap {
  constructor(type = 'min') { // default as a MinHeap
    this.storage = [];
    this.type = type;
  }

  // compare the parent and the child based on type of heap
  compare(parent, child) {
    if (parent === null || child === null) { return false; }
    if (this.type === "min") {
      return this.storage[parent] > this.storage[child];
    }
    return this.storage[parent] < this.storage[child];
  }

  // to insert, must maintain complete tree. Favors completeness
  //  over B(S)T properties so output may look weird.
  insert(value) {
    let idx = this.storage.push(value) - 1;

    let bubble = (index) => {
      let parent = Math.floor((index - 1) / 2);
      if (parent < 0) { return; }
      while(this.compare(parent, index)) {
        [this.storage[parent], this.storage[index]] =
          [this.storage[index], this.storage[parent]];
        index = parent;
        parent = Math.floor((index - 1) / 2);
        if (parent < 0) { break; }
      }
    }

    bubble(idx);
  }

  // extracts the minimum or maximum value
  //  can only remove the last node, so must do a special swapping
  extract() {
    // first swap the first with the last value
    if (this.storage.length > 1) {
      [this.storage[0], this.storage[this.storage.length - 1]] =
        [this.storage[this.storage.length - 1], this.storage[0]]
    }

    // pull the last value out, since it was formerly the first
    let extracted = this.storage.pop();

    // the heap condition is violated (out of order)
    // so bubble down until it is not.
    let bubbleDown = (index) => {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let swap = left;
      if (this.storage[right] && this.storage[right] < this.storage[left]) {
        swap = right;
      }

      // swap with the lowest values
      while (this.compare(index, swap)) {
        [this.storage[index], this.storage[swap]] =
          [this.storage[swap], this.storage[index]];

        left = index * 2 + 1;
        right = index * 2 + 2;
        swap = left;
        if (this.storage[right] && this.storage[right] < this.storage[left]) {
          swap = right;
        }
      }
    }

    bubbleDown(0);
    return extracted;
  }
}

document.addEventListener("DOMContentLoaded", main);
function main() {
  let heap = new BinaryHeap();
  heap.insert(5);
  heap.insert(4);
  heap.insert(3);
  heap.insert(1);
  heap.insert(2);
  heap.insert(0);
  console.log(heap.storage)
  console.log("Extracted: " + heap.extract());
  console.log(heap.storage)
}
