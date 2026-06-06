const findMinArrowShots = function (points) {
  if (points.length === 0) return 0;
  let sorted = [...points].sort((a, b) => a[1] - b[1]);
  let totalArrow = 1;
  let currentArrow = sorted[0][1];

  for (let i = 1; i < sorted.length; i++) {
    let [start, end] = sorted[i];

    if (currentArrow >= start) {
      continue;
    } else {
      currentArrow = end;
      totalArrow++;
    }
  }
  return totalArrow;
};
