const longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  for (let left = n - 1; left >= 0; left--) {
    for (let right = left + 1; right < n; right++) {
      if (s[left] === s[right]) {
        dp[left][right] = 2 + dp[left + 1][right - 1];
      } else {
        dp[left][right] = Math.max(dp[left + 1][right], dp[left][right - 1]);
      }
    }
  }

  return dp[0][n - 1];
};

longestPalindromeSubseq("bbbab");
