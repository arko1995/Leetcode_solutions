const minFlips = function (a, b, c) {
  let res = 0;
  while (a || b || c) {
    let bita = a & 1;
    let bitb = b & 1;
    let bitc = c & 1;

    if (bitc === 1 && bita === 0 && bitb === 0) res += 1;
    if (bitc === 0) res += bita + bitb;

    a >>= 1;
    b >>= 1;
    c >>= 1;
  }

  return res;
};
