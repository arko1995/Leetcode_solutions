const minDistance = function (word1, word2) {
  let m = word1.length;
  let n = word2.length;

  let dp = Array.from({ length: m + 1 }, () => Array(n + 1));

  for (let j = n; j >= 0; j--) {
    dp[m][j] = n - j;
  }
  for (let i = m; i >= 0; i--) {
    dp[i][n] = m - i;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]);
      }
    }
  }

  return dp[0][0];
};
