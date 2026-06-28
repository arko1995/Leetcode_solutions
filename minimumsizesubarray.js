const minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let i = 0;
  let currentSum = 0;

  for (let j = 0; j < nums.length; j++) {
    let length = 0;
    currentSum += nums[j];

    while (currentSum >= target) {
      minLength = Math.min(minLength, j - i + 1);
      currentSum -= nums[i];
      i++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
