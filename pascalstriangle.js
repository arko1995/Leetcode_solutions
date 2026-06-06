const generate = function (numRows) {
  if (numRows === 1) return [[1]];

  const arr = [];

  arr[0] = [1];

  for (let i = 1; i < numRows; i++) {
    let prevRow = [0, ...arr[arr.length - 1], 0];

    let ans = [];
    for (let j = 1; j < prevRow.length; j++) {
      ans.push(prevRow[j - 1] + prevRow[j]);
    }
    arr.push(ans);
  }
  return arr;
};
