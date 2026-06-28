const mergeAlternately = function (word1, word2) {
  const n = Math.max(word1.length, word2.length);

  let outPut = "";

  for (let i = 0; i < n; i++) {
    if (i < word1.length) outPut += word1[i];
    if (i < word2.length) outPut += word2[i];
  }
  return outPut;
};
