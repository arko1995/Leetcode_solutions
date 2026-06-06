const maximumJumps = function (nums, target) {
  const n = nums.length;

  const dp = Array(n).fill(-1);

  dp[0] = 0;

  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      let canJump = Math.abs(nums[j] - nums[i]) <= target;

      if (canJump && dp[i] !== -1) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }

  return dp[n - 1];
};
