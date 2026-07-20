const shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const flat = grid.flat();

  k %= flat.length;

  const shifted = [
    ...flat.slice(flat.length - k),
    ...flat.slice(0, flat.length - k),
  ];

  let result = [];

  for (let i = 0; i < m; i++) {
    result.push(shifted.slice(i * n, (i + 1) * n));
  }

  return result;
};

shiftGrid(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  1,
);
