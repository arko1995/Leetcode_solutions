const getRow = function (rowIndex) {
  const arr = [];

  arr[0] = [1];
  arr[1] = [1, 1];

  for (let i = 2; i <= rowIndex; i++) {
    let lastRow = [0, ...arr[arr.length - 1], 0];
    let ans = [];

    for (let j = 1; j < lastRow.length; j++) {
      ans.push(lastRow[j - 1] + lastRow[j]);
    }

    arr.push(ans);
  }

  return arr[rowIndex];
};
