const longestArithSeqLength = function (nums) {
  const n = nums.length;
  if (n <= 2) return n;
  const dp = Array.from({ length: n }, () => new Map());

  let answer = 2;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const previousLength = dp[j].get(diff) || 1;
      const currentLength = previousLength + 1;

      const bestAtI = dp[i].get(diff) || 0;

      dp[i].set(diff, Math.max(bestAtI, currentLength));
      answer = Math.max(answer, dp[i].get(diff));
    }
  }

  return answer;
};

longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]);
