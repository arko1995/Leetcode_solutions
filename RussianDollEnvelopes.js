const maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) return 0;

  envelopes.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });

  const tails = [];

  for (const [width, height] of envelopes) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (tails[mid] >= height) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    tails[left] = height;
  }
  return tails.length;
};
maxEnvelopes([
  [5, 4],
  [6, 4],
  [6, 7],
  [2, 3],
]);
