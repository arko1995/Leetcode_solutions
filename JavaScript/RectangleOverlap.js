const isRectangleOverlap = function (rec1, rec2) {
  const xOverLap = Math.max(rec1[0], rec2[0]) < Math.min(rec1[2], rec2[2]);
  const yOverLap = Math.max(rec1[1], rec2[1]) < Math.min(rec1[3], rec2[3]);

  return xOverLap && yOverLap;
};

isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]);
