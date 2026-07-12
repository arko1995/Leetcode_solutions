const findRightInterval = function (intervals) {
  const starts = intervals.map((interval, index) => {
    return [interval[0], index];
  });

  starts.sort((a, b) => a[0] - b[0]);

  let ans = [];

  for (const interval of intervals) {
    const end = interval[1];

    let left = 0;
    let right = starts.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (starts[mid][0] >= end) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    left === starts.length ? ans.push(-1) : ans.push(starts[left][1]);
  }
  return ans;
};

findRightInterval([
  [1, 4],
  [2, 3],
  [3, 4],
]);
