const minimumCost = function (cost1, cost2, costBoth, need1, need2) {
  const minNeed = Math.min(need1, need2);

  const rem1 = need1 - minNeed;
  const rem2 = need2 - minNeed;

  const individualCost = need1 * cost1 + need2 * cost2;
  const overlappingCost = Math.max(need1, need2) * costBoth;
  const combinedCost = minNeed * costBoth + rem1 * cost1 + rem2 * cost2;

  return Math.min(individualCost, overlappingCost, combinedCost);
};

console.log(minimumCost(5, 4, 15, 2, 3));
