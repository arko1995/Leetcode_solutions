const minimumSumSubarray = function (nums, l, r) {
  const m = nums.length;
  let ans = Infinity;

  for (let i = 0; i < m; i++) {
    let sum = 0;

    for (let j = i; j < m; j++) {
      sum += nums[j];
      const len = j - i + 1;

      if (len >= l && len <= r && sum > 0) {
        ans = Math.min(ans, sum);
      }
    }
  }

  return ans === Infinity ? -1 : ans;
};
console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3));
