const findLongestChain = function (pairs) {
  const n = pairs.length;
  const dp = new Array(n).fill(1);

  if (n === 0) return 0;

  pairs.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return dp[dp.length - 1];
};
// findLongestChain([
//   [1, 2],
//   [2, 3],
//   [3, 4],
// ]);

findLongestChain([
  [1, 2],
  [7, 8],
  [4, 5],
]);
