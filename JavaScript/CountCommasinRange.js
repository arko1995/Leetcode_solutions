const countCommas = function (n) {
  if (n < 1000) return 0;

  return n - 1000 + 1;
};

console.log(countCommas(998));
