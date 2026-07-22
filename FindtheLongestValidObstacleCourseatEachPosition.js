const longestObstacleCourseAtEachPosition = function (obstacles) {
  let tails = [];
  let answer = [];

  for (let i = 0; i < obstacles.length; i++) {
    const x = obstacles[i];
    let position = tails.length;

    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (tails[mid] <= x) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    position = left;

    if (position === tails.length) tails.push(x);
    else tails[position] = x;

    answer.push(position + 1);
  }

  return answer;
};

longestObstacleCourseAtEachPosition([1, 2, 3, 2]);
