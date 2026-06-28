const isGood = function (nums) {
  const n = nums.length;

  const max = Math.max(...nums);

  if (n !== max + 1) return false;

  let count = new Map();
  for (let i = 0; i < n; i++) {
    count.set(
      nums[i],
      count.get(nums[i]) === undefined ? 1 : count.get(nums[i]) + 1,
    );
  }

  for (let [key, value] of count) {
    if (value >= 2 && key !== max) return false;
    if (key === max && value !== 2) return false;
  }

  return true;
};
