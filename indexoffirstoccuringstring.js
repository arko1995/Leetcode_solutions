const strStr = function (haystack, needle) {
  let hayLen = haystack.length;
  let ndLen = needle.length;

  if (ndLen === 0) return 0;

  let i = 0;

  while (i < hayLen) {
    let ndindex = 0;
    let j = i;

    while (j <= hayLen && ndindex <= ndLen && haystack[j] === needle[ndindex]) {
      j++;
      ndindex++;

      if (ndindex === ndLen) return i;
    }
    i++;
  }

  return -1;
};
