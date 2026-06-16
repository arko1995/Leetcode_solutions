const wordBreak = function (s, wordDict) {
  let dp = Array(s.length + 1).fill(false);
  const word = new Set(wordDict);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && word.has(s.slice(j, i))) {
        dp[i] = true;
      }
    }
  }

  return dp[s.length];
};

wordBreak("leetcode", ["leet", "code"]);
