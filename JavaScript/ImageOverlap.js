const largestOverlap = function (img1, img2) {
  const n = img1[0].length;

  function countOverlap(img1, img2, rowShift, colShift) {
    let overlap = 0;

    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        const shiftedRow = r + rowShift;
        const shiftedCol = c + colShift;

        const isValid =
          shiftedRow >= 0 &&
          shiftedRow < n &&
          shiftedCol >= 0 &&
          shiftedCol < n;

        if (isValid && img1[r][c] === 1 && img2[shiftedRow][shiftedCol] === 1)
          overlap++;
      }
    }

    return overlap;
  }

  let best = 0;

  for (let row = -n; row < n; row++) {
    for (let col = -n; col < n; col++) {
      const current = countOverlap(img1, img2, row, col);

      best = Math.max(best, current);
    }
  }

  return best;
};

console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
  ),
);
