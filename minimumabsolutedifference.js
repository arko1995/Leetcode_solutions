const minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b);

  let minDiff = Infinity;

  let result = new Array();

  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];

    if (diff < minDiff) {
      minDiff = diff;
      result = [i - 1];
    } else if (diff === minDiff) {
      result.push([i - 1]);
    }
  }

  return result.map((i) => [arr[i], arr[i + 1]]);
};
