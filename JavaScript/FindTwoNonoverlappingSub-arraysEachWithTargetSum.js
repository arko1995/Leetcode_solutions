const minSumOfLengths = function (arr, target) {
  const n = arr.length;

  let minLength = Infinity;
  let answer = Infinity;
  let total = 0;
  let best = Array(n).fill(Infinity);
  let j = 0;

  for (let i = 0; i < n; i++) {
    total += arr[i];

    while (total > target) {
      total -= arr[j];
      j++;
    }

    if (total === target) {
      const currentLength = i - j + 1;

      if (j > 0 && best[j - 1] !== Infinity) {
        answer = Math.min(answer, currentLength + best[j - 1]);
      }

      minLength = Math.min(minLength, currentLength);
    }

    best[i] = minLength;
  }

  return answer === Infinity ? -1 : answer;
};

console.log(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6));
