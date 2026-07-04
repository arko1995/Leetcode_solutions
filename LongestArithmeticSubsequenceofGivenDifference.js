const longestSubsequence = function (arr, difference) {
  const dp = new Map();
  let answer = 0;

  for (let value of arr) {
    const previousValue = value - difference;
    const currentLength = (dp.get(previousValue) ?? 0) + 1;

    dp.set(value, currentLength);

    answer = Math.max(answer, currentLength);
  }
  return answer;
};

longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2);
