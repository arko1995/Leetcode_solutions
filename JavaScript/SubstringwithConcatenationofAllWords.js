const findSubstring = function (s, words) {
  const result = [];

  const wordLength = words[0].length;
  const wordCount = words.length;
  const totalLength = wordLength * wordCount;

  if (totalLength > s.length) return result;

  const need = new Map();

  for (const word of words) {
    need.set(word, (need.get(word) || 0) + 1);
  }

  for (let offset = 0; offset < wordLength; offset++) {
    let left = offset;
    let right = offset;
    let count = 0;

    const seen = new Map();

    while (right + wordLength <= s.length) {
      const word = s.slice(right, right + wordLength);

      right += wordLength;

      if (!need.has(word)) {
        seen.clear();
        count = 0;
        left = right;
        continue;
      }

      seen.set(word, (seen.get(word) || 0) + 1);
      count++;

      while (seen.get(word) > need.get(word)) {
        const leftWord = s.slice(left, left + wordLength);

        seen.set(leftWord, seen.get(leftWord) - 1);
        left += wordLength;

        count--;
      }

      if (count === wordCount) {
        result.push(left);

        const leftWord = s.slice(left, left + wordLength);

        seen.set(leftWord, seen.get(leftWord) - 1);
        left += wordLength;

        count--;
      }
    }
  }
  return result;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
