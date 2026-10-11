const sumOfSquares = function (nums) {
  const n = nums.length;

  let sum = 0;

  for (let i = 0; i < n; i++) {
    const isSpecial = n % (i + 1) === 0;

    if (isSpecial) {
      sum += nums[i] ** 2;
    }
  }

  return sum;
};

console.log(sumOfSquares([1, 2, 3, 4]));
