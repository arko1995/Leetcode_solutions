const countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob,
) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function getDayOfYear(date) {
    const [month, day] = date.split("-").map((x) => Number(x));

    let dayOfYear = day;

    for (let i = 0; i < month - 1; i++) {
      dayOfYear += daysInMonth[i];
    }

    return dayOfYear;
  }

  const aliceArrival = getDayOfYear(arriveAlice);
  const aliceLeave = getDayOfYear(leaveAlice);
  const bobArrival = getDayOfYear(arriveBob);
  const bobLeave = getDayOfYear(leaveBob);

  const result =
    Math.min(bobLeave, aliceLeave) - Math.max(bobArrival, aliceArrival) + 1;

  return result < 0 ? 0 : result;
};

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));
