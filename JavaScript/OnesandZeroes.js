var findMaxForm = function (strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let str of strs) {
    let currentOne = 0;
    let currentZero = 0;

    for (let item of str) {
      if (item === "1") currentOne++;
      else currentZero++;
    }

    for (let i = m; i >= currentZero; i--) {
      for (let j = n; j >= currentOne; j--) {
        dp[i][j] = Math.max(dp[i][j], 1 + dp[i - currentZero][j - currentOne]);
      }
    }
  }
  return dp[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
