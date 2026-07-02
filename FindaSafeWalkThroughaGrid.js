var findSafeWalk = function (grid, health) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dist = Array.from({ length: rows }, () =>
    new Array(cols).fill(Infinity),
  );

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dequeue = {};
  let front = 0;
  let back = 0;

  function pushFront(value) {
    dequeue[--front] = value;
  }
  function pushBack(value) {
    dequeue[back++] = value;
  }
  function popFront() {
    if (front === back) return undefined;

    let value = dequeue[front];
    delete dequeue[front];
    front++;
    return value;
  }

  dist[0][0] = grid[0][0];

  pushFront([0, 0]);

  while (front !== back) {
    const [row, col] = popFront();

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      const outsideGrid =
        newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols;

      if (outsideGrid) continue;

      const weight = grid[newRow][newCol];
      const newDistance = dist[row][col] + weight;

      if (newDistance < dist[newRow][newCol]) {
        dist[newRow][newCol] = newDistance;

        if (weight === 0) {
          pushFront([newRow, newCol]);
        } else {
          pushBack([newRow, newCol]);
        }
      }
    }
  }
  const minimumDamage = dist[rows - 1][cols - 1];

  if (minimumDamage < health) return true;
  else return false;
};

findSafeWalk(
  [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
  ],
  1,
);
