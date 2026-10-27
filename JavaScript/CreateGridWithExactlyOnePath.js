const createGrid = function (m, n) {
  const grid = Array.from({ length: m }, () => Array(n).fill("#"));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === n - 1) {
        grid[i][j] = ".";
      }
    }
  }

  return grid.map((row) => row.join(""));
};

console.log(createGrid(2, 3));
