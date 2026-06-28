const zigZagArrays = function (n, l, r) {
  const MOD = 1e9 + 7;
  const m = r - l + 1;

  if (n === 1) return m;

  let dp = new Int32Array(m);
  let next = new Int32Array(m);

  for (let i = 0; i <= m - 1; i++) {
    dp[i] = i;
  }

  for (let length = 3; length <= n; length++) {
    let prefixSum = 0;

    for (let i = 0; i <= m - 1; i++) {
      next[i] = prefixSum;
      prefixSum += dp[m - 1 - i];

      if (prefixSum >= MOD) {
        prefixSum -= MOD;
      }
    }

    const temporary = dp;
    dp = next;
    next = temporary;
  }

  let answer = 0;

  for (let i = 0; i <= m - 1; i++) {
    answer += dp[i];

    if (answer >= MOD) {
      answer -= MOD;
    }
  }

  return (answer * 2) % MOD;
};

zigZagArrays(3, 4, 5);
