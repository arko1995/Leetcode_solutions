const minimumDeleteSum = function (s1, s2) {
  let m = s1.length;
  let n = s2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  dp[m][n] = 0;

  for (let i = m - 1; i >= 0; i--) {
    dp[i][n] = s1[i].charCodeAt() + dp[i + 1][n];
  }

  for (let i = n - 1; i >= 0; i--) {
    dp[m][i] = s2[i].charCodeAt() + dp[m][i + 1];
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s1[i] === s2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        let deleteFromS1 = s1.charCodeAt(i) + dp[i + 1][j];
        let deleteFromS2 = s2.charCodeAt(j) + dp[i][j + 1];
        dp[i][j] = Math.min(deleteFromS1, deleteFromS2);
      }
    }
  }

  return dp[0][0];
};

minimumDeleteSum("sea", "eat");
