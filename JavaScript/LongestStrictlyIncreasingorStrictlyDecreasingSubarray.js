const longestMonotonicSubarray = function (nums) {
  let isIncreasing = true;
  let best = 1,
    up = 1,
    down = 1;

  for (let i = 1; i < nums.length; i++) {
    up = nums[i - 1] < nums[i] ? up++ : 1;
    down = nums[i - 1] > nums[i] ? down++ : 1;

    best = Math.max(best, up, down);
  }

  return best;
};

console.log(longestMonotonicSubarray([3, 3, 3, 3]));
