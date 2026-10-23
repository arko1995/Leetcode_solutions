const sortPermutation = function (nums) {
  const n = nums.length;
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) arr.push(nums[i]);
  }

  if (arr.length === 0) return 0;

  const k = arr.reduce((a, b) => a & b);

  return k;
};

sortPermutation([0, 1, 3, 2]);
