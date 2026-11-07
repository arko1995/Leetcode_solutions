class MyMinHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);

    let i = this.heap.length - 1;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);

      if (this.compare(this.heap[i], this.heap[parent]) >= 0) break;

      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];

      i = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;

    const result = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length === 0) return result;

    this.heap[0] = last;

    let i = 0;
    const n = this.heap.length;

    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) {
        smallest = left;
      }
      if (
        right < n &&
        this.compare(this.heap[right], this.heap[smallest]) < 0
      ) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];

      i = smallest;
    }
    return result;
  }
}

const assignTasks = function (servers, tasks) {
  const available = new MyMinHeap((a, b) => a[0] - b[0] || a[1] - b[1]);

  const busy = new MyMinHeap(
    (a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2],
  );

  const ans = [];
  let time = 0;

  for (let i = 0; i < servers.length; i++) {
    available.push([servers[i], i]);
  }

  for (let i = 0; i < tasks.length; i++) {
    time = Math.max(time, i);

    while (busy.size() > 0 && busy.peek()[0] <= time) {
      const [freeTime, weight, index] = busy.pop();
      available.push([weight, index]);
    }

    if (available.size() === 0) {
      time = busy.peek()[0];
      while (busy.size() > 0 && busy.peek()[0] <= time) {
        const [freeTime, weight, index] = busy.pop();
        available.push([weight, index]);
      }
    }

    const [weight, index] = available.pop();
    ans.push(index);

    busy.push([time + tasks[i], weight, index]);
  }

  return ans;
};
