const longestPalindrome = function (s) {
  const n = s.length;
  if (n < 2) return s;

  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  let start = 0;
  let maxLen = 1;

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;

      if (s[i] === s[j] && (len === 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;

        if (len > maxLen) {
          start = i;
          maxLen = len;
        }
      }
    }
  }

  return s.slice(start, start + maxLen);
};

longestPalindrome("babad");
