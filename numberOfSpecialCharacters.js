const numberOfSpecialChars = function (word) {
  const alphabetSize = 26;
  const a = "a".charCodeAt(0);
  const A = "A".charCodeAt(0);

  const lowerMask = 0;
  const upperMask = 0;

  for (let ch of word) {
    const code = ch.charCodeAt(0);

    if (code >= a && code < a + alphabetSize) {
      lowerMask |= 1 << (code - a);
    }
    if (code >= A && code < A + alphabetSize) {
      upperMask |= 1 << (code - A);
    }
  }

  const common = lowerMask & upperMask;

  let count = 0;

  while (common) {
    common &= common - 1;
    count++;
  }

  return count;
};

numberOfSpecialChars("aaAbcBC");
