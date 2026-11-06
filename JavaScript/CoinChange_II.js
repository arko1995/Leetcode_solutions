const change = function (amount, coins) {
  const m = coins.length;

  const memo = Array.from({ length: m }, () => Array(amount + 1).fill(-1));

  function dfs(index, remaining) {
    if (remaining === 0) {
      return 1;
    }

    if (remaining < 0 || index >= coins.length) {
      return 0;
    }

    if (memo[index][remaining] !== -1) return memo[index][remaining];

    let take = 0;

    if (coins[index] <= remaining) {
      take = dfs(index, remaining - coins[index]);
    }
    const skip = dfs(index + 1, remaining);

    memo[index][remaining] = take + skip;

    return take + skip;
  }

  return dfs(0, amount);
};

console.log(change(5, [1, 2, 5]));
