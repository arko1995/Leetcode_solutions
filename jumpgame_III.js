const canReach = function (arr, start) {
  let queue = [start];

  let visited = new Set();

  while (queue.length > 0) {
    let index = queue.pop();

    if (index < 0 || index > arr.length) continue;

    if (visited.has(index)) continue;

    if (arr[index] === 0) return true;

    visited.add(index);

    let jump = arr[index];

    queue.push(index + jump);
    queue.push(index - jump);
  }
  return false;
};

// [4,2,3,0,3,1,2]
