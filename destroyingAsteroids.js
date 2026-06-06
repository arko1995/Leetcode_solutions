const asteroidsDestroyed = function (mass, asteroids) {
  const maxAsteroid = Math.max(...asteroids);

  const counts = new Array(maxAsteroid + 1).fill(0);

  for (const asteroid of asteroids) {
    counts[asteroid]++;
  }

  for (let size = 1; size <= maxAsteroid; size++) {
    let count = counts[size];

    if (mass < size) return false;

    mass += size * count;
  }
  return true;
};

asteroidsDestroyed(5, [4, 9, 23, 4]);
