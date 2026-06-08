const minimumTotal = function (triangle) {
  let dp = new Array();

  dp[0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (j === 0) dp[j] = dp[j] + triangle[i][j];
      else if (j === i) dp[j] = dp[j - 1] + triangle[i][j];
      else dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j];
    }
  }
  return Math.min(...dp);
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
