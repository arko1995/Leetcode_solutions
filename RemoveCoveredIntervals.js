const removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];

    return a[0] - b[0];
  });

  let remaining = 0;
  let farthestRight = -Infinity;

  for (let [, right] of intervals) {
    if (right > farthestRight) {
      remaining++;
      farthestRight = right;
    }
  }

  return remaining;
};
removeCoveredIntervals([
  [1, 4],
  [3, 6],
  [2, 8],
]);
