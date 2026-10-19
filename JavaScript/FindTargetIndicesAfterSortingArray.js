const targetIndices = function (nums, target) {
  const n = nums.length;
  const map = new Map();
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      map.set(i, i);
    }
  }

  return Array.from(map.values());
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
