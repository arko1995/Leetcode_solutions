const rotate = function (nums, k) {
  k = k % nums.length;
  const rotateln = nums.length - k;

  let x = nums.splice(rotateln);

  nums.unshift(...x);

  return nums;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
