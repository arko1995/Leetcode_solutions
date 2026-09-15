const minWindow = function (s, t) {
  if (t.length > s.length) return "";

  const need = new Map();

  for (const char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  const window = new Map();

  let left = 0;
  let have = 0;
  const required = need.size;
  let minLength = Infinity;
  let resultStart = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    window.set(char, (window.get(char) || 0) + 1);

    if (need.has(char) && window.get(char) == need.get(char)) have++;

    while (have === required) {
      const windowLength = right - left + 1;

      if (windowLength < minLength) {
        minLength = windowLength;
        resultStart = left;
      }

      const leftChar = s[left];

      window.set(leftChar, (window.get(leftChar) || 0) - 1);

      if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
        have--;
      }

      left++;
    }
  }

  return minLength === Infinity
    ? ""
    : s.slice(resultStart, resultStart + minLength);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
