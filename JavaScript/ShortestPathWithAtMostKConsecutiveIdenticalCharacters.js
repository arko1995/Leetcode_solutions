class myMinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);

    let i = this.heap.length - 1;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);

      if (this.heap[parent][0] <= this.heap[i][0]) break;

      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];

      i = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    let top = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    let n = this.heap.length;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];

      i = smallest;
    }
    return top;
  }

  size() {
    return this.heap.length;
  }
}

const shortestPath = function (n, edges, labels, k) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
  }

  const dist = Array.from({ length: n }, () => Array(k + 1).fill(Infinity));

  const heap = new myMinHeap();

  dist[0][1] = 0;
  heap.push([0, 0, 1]);

  while (heap.size() > 0) {
    const [cost, node, count] = heap.pop();

    if (cost > dist[node][count]) continue;

    if (node === n - 1) {
      return cost;
    }

    for (const [next, weight] of graph[node]) {
      let newCount;

      if (labels[node] === labels[next]) {
        newCount = count + 1;
      } else {
        newCount = 1;
      }
      if (newCount > k) continue;

      const newCost = weight + cost;

      if (newCost < dist[next][newCount]) {
        dist[next][newCount] = newCost;
        heap.push([newCost, next, newCount]);
      }
    }
  }

  return -1;
};

shortestPath(
  3,
  [
    [0, 1, 1],
    [1, 2, 1],
    [0, 2, 3],
  ],
  "aab",
  1,
);
