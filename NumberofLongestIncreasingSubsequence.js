var findNumberOfLIS = function (nums) {
  const dp = Array(nums.length).fill(1);
  const count = Array(nums.length).fill(1);
  let maxLength = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (1 + dp[j] > dp[i]) {
          dp[i] = 1 + dp[j];
          count[i] = count[j];
        } else if (1 + dp[j] === dp[i]) {
          count[i] += count[j];
        }
      }
    }
    maxLength = Math.max(maxLength, dp[i]);
  }

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (dp[i] === maxLength) {
      result += count[i];
    }
  }

  return result;
};

findNumberOfLIS([1, 3, 5, 4, 7]);
