var lengthOfLastWord = function (s) {
  const arr = s.split("");
  let count = 0;
  let countingStarted = false;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === " " && !countingStarted) {
      continue;
    } else if (arr[i] === " " && countingStarted) {
      return count;
    } else {
      count++;
      countingStarted = true;
    }
  }
  return count;
};
