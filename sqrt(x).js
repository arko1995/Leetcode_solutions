const mySqrt = function (x) {
  let left = 0,
    right = x;
  let ans = 0;

  if (x <= 1) return x;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (mid === x / mid) {
      return mid;
    } else if (mid <= x / mid) {
      left = mid + 1;
      ans = mid;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};
