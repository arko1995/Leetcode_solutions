var maximumSafenessFactor = function (grid) {
  const queue = [];
  const distance = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(-1),
  );
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        distance[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let front = 0;

  while (front < queue.length) {
    const [r, c] = queue[front++];

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < grid.length &&
        nc >= 0 &&
        nc < grid[0].length &&
        distance[nr][nc] === -1
      ) {
        distance[nr][nc] = 1 + distance[r][c];
        queue.push([nr, nc]);
      }
    }
  }

  let maximumDistance = 0;

  for (let i = 0; i < distance.length; i++) {
    for (let j = 0; j < distance[0].length; j++) {
      maximumDistance = Math.max(distance[i][j], maximumDistance);
    }
  }

  let best = 0;

  let low = 0;

  let high = Math.min(
    distance[0][0],
    distance[distance.length - 1][distance[0].length - 1],
  );

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (canReach(middle)) {
      best = middle;
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  function canReach(minimumSafety) {
    const rows = distance.length;
    const cols = distance[0].length;

    if (
      distance[0][0] < minimumSafety ||
      distance[rows - 1][cols - 1] < minimumSafety
    ) {
      return false;
    }

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const pathQueue = [[0, 0]];

    visited[0][0] = true;

    let front = 0;

    while (front < pathQueue.length) {
      const [r, c] = pathQueue[front++];

      if (r === rows - 1 && c === cols - 1) return true;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        const isInside = nr >= 0 && nr < rows && nc >= 0 && nc < cols;

        if (isInside && !visited[nr][nc] && distance[nr][nc] >= minimumSafety) {
          visited[nr][nc] = true;
          pathQueue.push([nr, nc]);
        }
      }
    }
    return false;
  }
  return best;
};

maximumSafenessFactor([
  [0, 0, 1],
  [0, 0, 0],
  [1, 0, 0],
]);
