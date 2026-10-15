const sumCounts = function (nums) {
  const n = nums.length;

  let result = 0;

  for (let i = 0; i < n; i++) {
    const set = new Set();

    for (let j = i; j < n; j++) {
      set.add(nums[j]);

      result += set.size ** 2;
    }
  }
  return result;
};
console.log(sumCounts([1, 2, 1]));
