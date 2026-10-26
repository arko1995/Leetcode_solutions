const countIslands = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;

  function isIsland(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return 0;

    if (grid[r][c] === 0) {
      return 0;
    }

    const value = grid[r][c];

    grid[r][c] = 0;

    const up = isIsland(r - 1, c);
    const down = isIsland(r + 1, c);
    const left = isIsland(r, c - 1);
    const right = isIsland(r, c + 1);

    return value + up + down + left + right;
  }

  let count = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] > 0) {
        const sum = isIsland(r, c);

        if (sum % k === 0) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(
  countIslands(
    [
      [0, 2, 1, 0, 0],
      [0, 5, 0, 0, 5],
      [0, 0, 1, 0, 0],
      [0, 1, 4, 7, 0],
      [0, 2, 0, 0, 8],
    ],
    5,
  ),
);
