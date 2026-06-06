const trap = function (height) {
  let start = 0;
  let end = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;

  while (start < end) {
    leftMax = Math.max(leftMax, height[start]);
    rightMax = Math.max(rightMax, height[end]);

    if (leftMax < rightMax) {
      totalWater += leftMax - height[start];
      start++;
    } else {
      totalWater += rightMax - height[end];
      end--;
    }
  }
  return totalWater;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
