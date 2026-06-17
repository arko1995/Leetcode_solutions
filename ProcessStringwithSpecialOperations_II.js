const processStr = function (s, k) {
  let len = 0;

  for (let ch of s) {
    if (ch >= "a" && ch <= "z") {
      len++;
    } else if (ch === "*") {
      if (len > 0) len--;
    } else if (ch === "#") {
      len *= 2;
    }
  }

  if (k < 0 || k >= len) return ".";

  for (let i = s.length - 1; i >= 0; i--) {
    let ch = s[i];

    if (ch >= "a" && ch <= "z") {
      if (k === len - 1) return ch;
      len--;
    } else if (ch === "*") {
      len++;
    } else if (ch === "#") {
      len /= 2;
      if (k >= len) {
        k -= len;
      }
    } else if (ch === "%") {
      k = len - 1 - k;
    }
  }
  return ".";
};
processStr("a#b%*", 1);
