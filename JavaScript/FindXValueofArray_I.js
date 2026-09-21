const resultArray = function (nums, k) {
  const ans = Array(k).fill(0);
  let dp = Array(k).fill(0);

  for (const x of nums) {
    let new_dp = Array(k).fill(0);
    new_dp[x % k] += 1;

    for (let r = 0; r < k; r++) {
      if (dp[r] > 0) {
        const new_remainder = (r * x) % k;
        new_dp[new_remainder] += dp[r];
      }
    }

    for (let r = 0; r < k; r++) {
      ans[r] += new_dp[r];
    }
    dp = new_dp;
  }
  return ans;
};

console.log(resultArray([1, 2, 3, 4, 5], 3));
