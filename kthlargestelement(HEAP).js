class minHeap {
  constructor() {
    this.data = [];
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
  size() {
    return this.data.length;
  }
  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
  peek() {
    return this.data[0];
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

    const root = this.data[0];
    this.data[0] = this.data.pop();
    this.bubbleDown(0);
    return root;
  }
  bubbleDown(index) {
    let size = this.size();
    while (true) {
      let smallest = index;
      let left = this.leftChildIndex(index);
      let right = this.rightChildIndex(index);

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

const findKthLargest = function (nums, k) {
  let heap = new minHeap();
  for (let num of nums) {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  }
  return heap.peek();
};
