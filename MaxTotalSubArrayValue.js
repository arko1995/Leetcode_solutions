const maxTotalValue = function (nums, k) {
  let globalMin = nums[0];
  let globalMax = nums[0];

  for (let num of nums) {
    globalMin = Math.min(globalMin, num);
    globalMax = Math.max(globalMax, num);
  }

  return k * (globalMax - globalMin);
};

maxTotalValue([4, 2, 5, 1], 3);
