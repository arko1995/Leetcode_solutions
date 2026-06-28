const leftRightDifference = function (nums) {
  const n = nums.length;

  const answer = new Array(n);

  for (let index = 0; index < n; index++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < index; j++) {
      leftSum += nums[j];
    }

    for (let j = index + 1; j < n; j++) {
      rightSum += nums[j];
    }

    answer[index] = Math.abs(leftSum - rightSum);
  }

  return answer;
};

leftRightDifference([10, 4, 8, 3]);
