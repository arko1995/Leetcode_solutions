const candy = function (ratings) {
  const n = ratings.length;

  let arr = Array.from({ length: n }).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) arr[i] = arr[i - 1] + 1;
  }

  for (let i = n - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) arr[i] = Math.max(arr[i], arr[i + 1] + 1);
  }

  return arr.reduce((sum, acc) => sum + acc);
};

candy([1, 3, 2, 2, 1]);
