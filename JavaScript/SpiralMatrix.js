const spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  const arr = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i]);
    }
    top++;

    for (let j = top; j <= bottom; j++) {
      arr.push(matrix[j][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        arr.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let j = bottom; j >= top; j--) {
        arr.push(matrix[j][left]);
      }
      left++;
    }
  }

  return arr;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
