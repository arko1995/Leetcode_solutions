var assignEdgeWeights = function (edges) {
  let graph = Array.from({ length: edges.length + 2 }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let maxDepth = 0;

  function DFS(node, parent, depth) {
    maxDepth = Math.max(maxDepth, depth);

    for (let neighbour of graph[node]) {
      if (neighbour === parent) continue;

      DFS(neighbour, node, depth + 1);
    }
  }

  DFS(1, -1, 0);

  const MOD = 1000000007n;

  function power(exp) {
    let ans = 1n;
    let base = 2n;

    exp = BigInt(exp);

    while (exp > 0n) {
      if (exp % 2n === 1n) {
        ans = (ans * base) % MOD;
      }

      base = (base * base) % MOD;
      exp = exp / 2n;
    }
    return ans;
  }

  return Number(power(maxDepth - 1));
};

assignEdgeWeights([
  [1, 2],
  [1, 3],
  [3, 4],
  [3, 5],
]);
