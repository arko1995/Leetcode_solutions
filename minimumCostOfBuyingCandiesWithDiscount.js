const minimumCost = function (cost) {
  cost.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0; i < cost.length - 1; i++) {
    if (i % 3 !== 2) ans += cost[i];
  }

  return ans;
};

minimumCost([6, 5, 7, 9, 2, 2]);
