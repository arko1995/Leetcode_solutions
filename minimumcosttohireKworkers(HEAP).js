class minHeap {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
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
  push(val) {
    this.data.push(val);
    this.bubbleUp(this.size() - 1);
  }
  bubbleUp(index) {
    while (index > 0) {
      let parent = this.parent(index);
      if (this.data[parent] <= this.data[index]) break;
      this.swap(index, parent);
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

const totalCost = function (costs, k, candidates) {
  let n = costs.length;

  let leftHeap = new minHeap();
  let rightHeap = new minHeap();

  let total = 0;
  let left = 0;
  let right = n - 1;

  while (k > 0) {
    while (leftHeap.size() < candidates && left <= right) {
      leftHeap.push(costs[left]);
      left++;
    }
    while (rightHeap.size() < candidates && left <= right) {
      rightHeap.push(costs[right]);
      right--;
    }
    if (leftHeap.size() === 0) {
      total += rightHeap.pop();
    } else if (rightHeap.size() === 0) {
      total += leftHeap.pop();
    } else {
      if (leftHeap.peek() <= rightHeap.peek()) {
        total += leftHeap.pop();
      } else {
        total += rightHeap.pop();
      }
    }
    k--;
  }
  return total;
};
