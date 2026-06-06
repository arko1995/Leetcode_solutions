const maxProfit = function (prices) {
  if (!prices.every(Number.isFinite)) return 0;

  let cash = 0;

  let hold = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    let temp = cash;

    cash = Math.max(cash, hold + prices[i]);
    hold = Math.max(hold, temp - prices[i]);
  }
  return cash;
};
