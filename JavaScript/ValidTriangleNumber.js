const triangleNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const n = nums.length;

  let count = 0;

  for (let i = 0; i < n - 2; i++) {
    if (n === 0) continue;

    for (let j = i + 1; j < n - 1; j++) {
      const target = nums[i] + nums[j];

      let left = j + 1;
      let right = n - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      count += left - j - 1;
    }
  }
  return count;
};

console.log(console.log(triangleNumber([4, 2, 3, 4])));
