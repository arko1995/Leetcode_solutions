const gameOfLife = function (board) {
  const m = board.length;
  const n = board[0].length;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      let liveNeighbor = 0;

      for (const [dr, dc] of directions) {
        const r = row + dr;
        const c = col + dc;

        if (r >= 0 && r < m && c >= 0 && c < n && Math.abs(board[r][c]) === 1) {
          liveNeighbor++;
        }
      }

      if (board[row][col] === 1) {
        if (liveNeighbor < 2 || liveNeighbor > 3) {
          board[row][col] = -1;
        }
      } else if (liveNeighbor === 3) {
        board[row][col] = 2;
      }
    }
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      board[row][col] = board[row][col] > 0 ? 1 : 0;
    }
  }
};

gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]);
