const countNegatives = function (grid) {
  let output = 0;

  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    let left = 0;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (grid[i][mid] < 0) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    output += n - left;
  }
  return output;
};

countNegatives([
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
]);
