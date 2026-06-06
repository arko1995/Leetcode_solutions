const minJumps = function (arr) {
  const n = arr.length;

  if (n <= 1) return 0;

  const graph = new Map();

  for (let i = 0; i < n; i++) {
    if (!graph.has(arr[i])) {
      graph.set(arr[i], []);
    }
    graph.get(arr[i]).push(i);
  }

  const queue = [0];

  const visited = new Set([0]);

  let jumps = 0;
  while (queue.length > 0) {
    const size = queue.length;

    for (let s = 0; s < size; s++) {
      let i = queue.shift();

      if (i === n - 1) return jumps;

      let neighbors = [i - 1, i + 1, ...graph.get(arr[i])];

      for (let next of neighbors) {
        if (next >= 0 && next < n && !visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }

      graph.set(arr[i], []);
    }
    jumps++;
  }
  return -1;
};

//[100,-23,-23,404,100,23,23,23,3,404]
