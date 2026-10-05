const scoreOfParentheses = function (s) {
  const n = s.length;
  let score = 0;
  let depth = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      depth++;
    } else {
      depth--;
      if (s[i - 1] === "(") {
        score += 2 ** depth;
      }
    }
  }

  return score;
};

console.log(scoreOfParentheses("(())"));
