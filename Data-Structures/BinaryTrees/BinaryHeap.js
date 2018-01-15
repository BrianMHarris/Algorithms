class BinaryHeap {
  constructor(type = 'min') { // default as a MinHeap
    this.storage = [];
    this.type = type;
  }

  // compare the parent and the child based on type of heap
  compare(parent, child) {
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
      let parent = Math.floor((idx - 1) / 2);
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

  extract() {

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
  console.log(heap.storage)
}
