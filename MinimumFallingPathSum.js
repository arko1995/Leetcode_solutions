const minFallingPathSum = function (matrix) {
  const n = matrix.length;

  dp = [...matrix[0]];

  for (let i = 1; i < n; i++) {
    let newDp = new Array(n);

    for (let j = 0; j < n; j++) {
      let above = dp[j];
      let aboveLeft = j > 0 ? dp[j - 1] : Infinity;
      let aboveRight = j < n - 1 ? dp[j + 1] : Infinity;

      newDp[j] = matrix[i][j] + Math.min(above, aboveLeft, aboveRight);
    }
    dp = newDp;
  }
  return Math.min(...dp);
};

minFallingPathSum([
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
]);
