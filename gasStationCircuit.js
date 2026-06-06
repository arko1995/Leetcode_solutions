const canCompleteCircuit = function (gas, cost) {
  const totalGas = gas.reduce((sum, acc) => sum + acc);
  const totalCost = cost.reduce((sum, acc) => sum + acc);

  if (totalCost > totalGas) return -1;

  let start = 0;
  let currentGas = 0;

  for (let i = 0; i < cost.length; i++) {
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }

  return start;
};

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
