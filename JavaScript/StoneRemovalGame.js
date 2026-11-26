const canAliceWin = function (n) {
  function take(stones, required, isAlice) {
    if (stones < required) {
      return !isAlice;
    }

    return take(stones - required, required - 1, !isAlice);
  }

  return take(n, 10, true);
};

console.log(canAliceWin(12));
