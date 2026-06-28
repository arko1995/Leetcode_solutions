var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let grid = Array.from({ length: numRows }, () => Array());
  let answer = "";

  let row = 0;
  let down = true;
  for (let i = 0; i < s.length; i++) {
    if (row < numRows && down) {
      grid[row].push(s[i]);
      row++;
    } else if (row < numRows && !down) {
      grid[row].push(s[i]);
      row--;
    }
    if (row === numRows - 1) {
      down = false;
    } else if (row === 0) {
      down = true;
    }
  }

  for (let row of grid) {
    answer += row.join("");
  }
  return answer;
};

convert("PAYPALISHIRING", 3);
