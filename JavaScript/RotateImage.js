const rotate = function (matrix) {
  const m = matrix.length;

  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < m; i++) {
    matrix[i].reverse();
  }

  return matrix;
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
