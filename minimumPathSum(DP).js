const minPathSum = function (grid) {
  const dp = grid.map((row) => [...row]);

  for (let m = 1; m < grid.length; m++) {
    dp[m][0] = dp[m - 1][0] + grid[m][0];
  }

  for (let n = 1; n < grid[0].length; n++) {
    dp[0][n] = dp[0][n - 1] + grid[0][n];
  }

  for (let m = 1; m < grid.length; m++) {
    for (let n = 1; n < grid[m].length; n++) {
      dp[m][n] = Math.min(dp[m - 1][n], dp[m][n - 1]) + grid[m][n];
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
