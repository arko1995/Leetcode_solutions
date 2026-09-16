const numberOfSets = function (n, k) {
  const dp = Array.from({ length: n }, () => Array(k + 1).fill(0));
  const prefix = Array.from({ length: n }, () => Array(k + 1).fill(0));

  const MOD = 1000000007;

  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
    prefix[i][0] = i + 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j] = dp[i - 1][j];
      dp[i][j] = (dp[i][j] + prefix[i - 1][j - 1]) % MOD;
      prefix[i][j] = (prefix[i - 1][j] + dp[i][j]) % MOD;
    }
  }

  return dp[n - 1][k];
};

console.log(numberOfSets(4, 2));
