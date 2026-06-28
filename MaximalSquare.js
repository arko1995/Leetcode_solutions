const maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const dp = Array.from({ length: m }, () => Array(n));
  let maxSide = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "0") dp[i][j] = 0;
      else if (i === 0 || j === 0) {
        if (matrix[i][j] === "1") dp[i][j] = 1;
        else dp[i][j] = 0;
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
      maxSide = Math.max(dp[i][j], maxSide);
    }
  }

  return maxSide ** 2;
};

maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
]);
