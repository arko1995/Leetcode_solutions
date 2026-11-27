const maximumSaleItems = function (items, budget) {
  const freq = Array(1501).fill(0);
  const count = Array(1501).fill(0);

  let minPrice = Infinity;

  for (const [factor, price] of items) {
    freq[factor]++;
    minPrice = Math.min(minPrice, price);
  }

  for (let i = 1; i <= 1500; i++) {
    for (let j = i; j <= 1500; j += i) {
      count[i] += freq[j];
    }
  }

  const dp = Array(budget + 1).fill(0);

  for (let [factor, cost] of items) {
    const value = count[factor];

    for (let b = budget; b >= cost; b--) {
      dp[b] = Math.max(dp[b], dp[b - cost] + value);
    }
  }

  let ans = 0;

  for (let b = 0; b <= budget; b++) {
    const extra = Math.floor((budget - b) / minPrice);
    ans = Math.max(ans, dp[b] + extra);
  }

  return ans;
};

maximumSaleItems(
  [
    [6, 2],
    [2, 6],
    [3, 4],
  ],
  9,
);
