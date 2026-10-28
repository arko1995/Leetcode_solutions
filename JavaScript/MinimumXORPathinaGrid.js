const minCost = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dp = Array.from({ length: n }, () => new Uint8Array(1024));

  dp[0][grid[0][0]] = 1;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r === 0 && c === 0) continue;

      const curr = new Uint8Array(1024);
      const val = grid[r][c];

      if (r > 0) {
        for (let x = 0; x < 1024; x++) {
          if (dp[c][x]) {
            curr[x ^ val] = 1;
          }
        }
      }

      if (c > 0) {
        for (let x = 0; x < 1024; x++) {
          if (dp[c - 1][x]) {
            curr[x ^ val] = 1;
          }
        }
      }

      dp[c] = curr;
    }
  }

  for (let x = 0; x < 1024; x++) {
    if (dp[n - 1][x]) return x;
  }

  return -1;
};

console.log(
  minCost([
    [6, 7],
    [5, 8],
  ]),
);
