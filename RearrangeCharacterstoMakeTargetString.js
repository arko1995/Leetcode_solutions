const rearrangeCharacters = function (s, target) {
  let sFreq = new Map();
  let tFreq = new Map();

  for (let i = 0; i < s.length; i++) {
    sFreq.set(s[i], (sFreq.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < target.length; i++) {
    tFreq.set(target[i], (tFreq.get(target[i]) || 0) + 1);
  }

  let maxCopies = Infinity;

  for (let [ch, required] of tFreq) {
    const available = sFreq.get(ch) || 0;

    maxCopies = Math.min(maxCopies, Math.floor(available / required));
  }

  return maxCopies;
};

rearrangeCharacters("abcba", "abc");
