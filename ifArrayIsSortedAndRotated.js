const check = function (nums) {
  let breaks = 0;

  for (let start = 1; start <= nums.length; start++) {
    if (nums[start - 1] > nums[start % nums.length]) breaks++;
  }

  return breaks <= 1;
};
