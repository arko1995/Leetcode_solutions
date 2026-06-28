const jump = function (nums) {
  let jump = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jump++;
      currentEnd = farthest;
    }
  }
  return jump;
};

jump([2, 3, 1, 1, 4]);
