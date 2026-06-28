//This solution uses KMP(Knuth-Morris-Pratt) algorithm

const strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  const lps = buildLPS(needle);

  let i = 0;
  let j = 0;

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;

      if (j === needle.length) return i - j;
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
  return -1;
};

function buildLPS(pattern) {
  const lps = new Array(pattern.length).fill(0);

  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else if (length > 0) {
      length = lps[length - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }

  return lps;
}

strStr("sadbutsad", "sad");
