const calcEquation = function (equations, values, queries) {
  const graph = new Map();

  function addEdge(from, to, weight) {
    if (!graph.get(from)) graph.set(from, []);

    graph.get(from).push({ Neighbour: to, Weight: weight });
  }

  for (let i = 0; i < equations.length; i++) {
    const [A, B] = equations[i];
    const K = values[i];
    addEdge(A, B, K);
    addEdge(B, A, 1 / K);
  }

  function dfs(current, target, visited) {
    if (!graph.has(current)) return -1;
    else if (current === target) return 1;
    visited.add(current);

    for (const { Neighbour, Weight } of graph.get(current)) {
      if (visited.has(Neighbour)) continue;
      let sub = dfs(Neighbour, target, visited);

      if (sub !== -1) return Weight * sub;
    }
    return -1;
  }

  let result = [];

  for (const [start, end] of queries) {
    if (!graph.has(start) || !graph.has(end)) result.push(-1);
    else if (start === end) result.push(1);
    else {
      let visited = new Set();
      result.push(dfs(start, end, visited));
    }
  }
  return result;
};
