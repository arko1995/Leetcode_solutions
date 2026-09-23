const numSubseq = function (nums, target) {
  const n = nums.length;
  nums = nums.sort((a, b) => a - b);
  const MOD = 10 ** 9 + 7;

  const power = new Array(n);
  power[0] = 1;
  for (let i = 1; i < n; i++) {
    power[i] = (power[i - 1] * 2) % MOD;
  }

  let count = 0;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    if (nums[left] + nums[right] <= target) {
      count = (count + power[right - left]) % MOD;
      left++;
    } else {
      right--;
    }
  }

  return count;
};

console.log(numSubseq([3, 5, 6, 7], 9));
