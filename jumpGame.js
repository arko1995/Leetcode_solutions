const maxValue = function (nums) {
  const n = nums.length;

  const preMax = Array(n);
  const ans = Array(n);

  preMax[0] = nums[0];

  for (let i = 1; i < n; i++) {
    preMax[i] = Math.max(preMax[i - 1], nums[i]);
  }

  ans[n - 1] = preMax[n - 1];

  let sufMin = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (preMax[i] > sufMin) {
      ans[i] = ans[i + 1];
    } else {
      ans[i] = preMax[i];
    }
    sufMin = Math.min(sufMin, nums[i]);
  }
  return ans;
};
