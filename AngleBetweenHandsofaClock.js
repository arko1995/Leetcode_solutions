const angleClock = function (hour, minutes) {
  const hourAngle = 0.5 * (60 * hour + minutes);
  const minuteAngle = 6 * minutes;

  let angleDifference = Math.abs(hourAngle - minuteAngle);

  if (angleDifference > 180) {
    angleDifference -= 360;
  }

  return Math.abs(angleDifference);
};

angleClock(12, 30);
