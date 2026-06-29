const numOfStrings = function (patterns, word) {
  let count = 0;

  for (const ch of patterns) {
    if (word.includes(ch)) {
      count++;
    }
  }

  return count;
};

// numOfStrings(["a", "abc", "bc", "d"], "abc")
// numOfStrings(["a", "b", "c"], "aaaaabbbbb");
// numOfStrings(["a", "a", "a"], "ab");
