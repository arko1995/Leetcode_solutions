const setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const affectedRows = new Set();
  const affectedcols = new Set();

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === 0) {
        affectedRows.add(r);
        affectedcols.add(c);
      }
    }
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (affectedRows.has(r) || affectedcols.has(c)) {
        matrix[r][c] = 0;
      }
    }
  }

  return matrix;
};

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
