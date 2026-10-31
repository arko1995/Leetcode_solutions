const uniquePaths = function (grid) {
  const MOD = 10 ** 9 + 7;

  const m = grid.length;
  const n = grid[0].length;

  const right = Array.from({ length: m }, () => Array(n).fill(0));
  const down = Array.from({ length: m }, () => Array(n).fill(0));

  right[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const total = right[i][j] + down[i][j];
      if (grid[i][j] === 1) {
        if (j + 1 < n) {
          right[i][j + 1] = (right[i][j + 1] + down[i][j]) % MOD;
        }
        if (i + 1 < m) {
          down[i + 1][j] = (down[i + 1][j] + right[i][j]) % MOD;
        }
      } else {
        if (j + 1 < n) {
          right[i][j + 1] += total % MOD;
        }
        if (i + 1 < m) {
          down[i + 1][j] += total % MOD;
        }
      }
    }
  }

  return (right[m - 1][n - 1] + down[m - 1][n - 1]) % MOD;
};

console.log(
  uniquePaths([
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
  ]),
);
