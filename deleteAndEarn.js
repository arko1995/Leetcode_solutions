const deleteAndEarn = function (nums) {
  let maxNum = Math.max(...nums);
  let points = new Array(maxNum + 1).fill(0);

  for (let ch of nums) {
    points[ch] += ch;
  }

  const n = points.length;

  let dp = Array(n);

  dp[0] = points[0];
  dp[1] = Math.max(points[0], points[1]);

  for (let i = 2; i < n; i++) {
    let skip = dp[i - 1];
    let take = dp[i - 2] + points[i];

    dp[i] = Math.max(skip, take);
  }
  return dp[n - 1];
};

deleteAndEarn([2, 2, 3, 3, 3, 4]);
