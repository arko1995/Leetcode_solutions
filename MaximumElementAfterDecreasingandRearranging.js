var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b);

  if (arr[0] !== 1) arr[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    const x = arr[i - 1];

    if (arr[i] > x + 1) {
      arr[i] = x + 1;
    }
  }

  return arr[arr.length - 1];
};

maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5]);
