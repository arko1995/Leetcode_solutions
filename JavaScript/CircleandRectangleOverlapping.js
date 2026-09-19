const checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  let closestX;

  if (xCenter < x1) {
    closestX = x1;
  } else if (xCenter > x2) {
    closestX = x2;
  } else {
    closestX = xCenter;
  }

  let closestY;

  if (yCenter < y1) {
    closestY = y1;
  } else if (yCenter > y2) {
    closestY = y2;
  } else {
    closestY = yCenter;
  }

  let dx = xCenter - closestX;
  let dy = yCenter - closestY;

  const distanceSquared = dx ** 2 + dy ** 2;

  return distanceSquared <= radius ** 2;
};

console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1));
