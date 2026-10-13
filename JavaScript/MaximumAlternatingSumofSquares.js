const maxAlternatingSum = function (nums) {
  const n = nums.length;
  let ans = Array(n);
  nums = nums.map((item) => item ** 2);

  nums.sort((a, b) => b - a);

  let left = 0;
  let right = n - 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      ans[i] = nums[left];
      left++;
    } else {
      ans[i] = nums[right];
      right--;
    }
  }

  let sum = 0;
  ans.map((val, index) => {
    if (index % 2 !== 0) {
      sum += val;
    } else {
      sum -= val;
    }
  });

  return Math.abs(sum);
};

console.log(maxAlternatingSum([1, 2, 3]));
