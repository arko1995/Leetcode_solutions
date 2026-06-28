class minHeap {
  constructor() {
    this.data = [];
  }
  size() {
    return this.data.length;
  }
  peek() {
    return this.data[0];
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
  push(val) {
    this.data.push(val);
    this.bubbleUp(this.size() - 1);
  }
  bubbleUp(index) {
    while (index > 0) {
      let parent = this.parent(index);
      if (this.data[parent] <= this.data[index]) break;
      this.swap(parent, index);
      index = parent;
    }
  }
  pop() {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.data.pop();

    let root = this.data[0];
    this.data[0] = this.data.pop();
    this.bubbleDown(0);
    return root;
  }
  bubbleDown(index) {
    let size = this.size();

    while (true) {
      let left = this.leftChildIndex(index);
      let right = this.rightChildIndex(index);
      let smallest = index;

      if (left < size && this.data[left] < this.data[smallest]) {
        smallest = left;
      }
      if (right < size && this.data[right] < this.data[smallest]) {
        smallest = right;
      }
      if (smallest === index) break;
      this.swap(smallest, index);
      index = smallest;
    }
  }
}

const SmallestInfiniteSet = function () {
  this.heap = new minHeap();
  this.set = new Set();
  this.next = 1;
};

SmallestInfiniteSet.prototype.popSmallest = function () {
  while (this.heap.size() > 0) {
    let min = this.heap.pop();
    this.set.delete(min);
    return min;
  }
  return this.next++;
};

SmallestInfiniteSet.prototype.addBack = function (num) {
  if (num < this.next && !this.set.has(num)) {
    this.heap.push(num);
    this.set.add(num);
  }
};
