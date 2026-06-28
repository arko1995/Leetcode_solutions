class minHeap {
  constructor() {
    this.data = [];
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
  size() {
    return this.data.length;
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
    let size = this.data.length;
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

const maxScore = function (nums1, nums2, k) {
  const pairs = nums2
    .map((num, i) => [nums1[i], num])
    .sort((a, b) => b[1] - a[1]);

  let heap = new minHeap();
  let result = 0;
  let heapSum = 0;

  for (let [val1, val2] of pairs) {
    heap.push(val1);
    heapSum += val1;

    if (heap.size() > k) {
      let removed = heap.pop();
      heapSum -= removed;
    }

    if (heap.size() === k) {
      let score = heapSum * val2;

      result = Math.max(score, result);
    }
  }
  return result;
};
