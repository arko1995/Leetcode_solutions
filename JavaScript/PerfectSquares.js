const numSquares = function (n) {
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < n + 1; i++) {
    let j = 1;

    while (j * j <= i) {
      let square = j * j;
      dp[i] = Math.min(dp[i], 1 + dp[i - square]);
      j++;
    }
  }

  return dp[n];
};

console.log(numSquares(12));
