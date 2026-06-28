const nearestExit = function (maze, entrance) {
  let rows = maze.length;
  let cols = maze[0].length;

  let [sr, sc] = entrance;

  let visited = new Set();

  visited.add(`${sr},${sc}`);

  let q = [[sr, sc]];

  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let step = 0;
  while (q.length > 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let [r, c] = q.shift();

      for (let [dr, dc] of dir) {
        let nr = r + dr;
        let nc = c + dc;
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;

        if (maze[nr][nc] === "." && !visited.has(`${nr},${nc}`)) {
          if (nr === 0 || nc === 0 || nr === rows - 1 || nc === cols - 1)
            return step + 1;
          visited.add(`${nr},${nc}`);
          q.push([nr, nc]);
        }
      }
    }
    step++;
  }
  return -1;
};
