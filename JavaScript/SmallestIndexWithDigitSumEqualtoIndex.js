const smallestIndex = function (nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let num = nums[i];
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    if (sum === i) {
      return i;
    }
  }
  return -1;
};

console.log(smallestIndex([1, 10, 11]));
