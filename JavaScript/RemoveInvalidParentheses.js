const removeInvalidParentheses = function (s) {
  const n = s.length;
  let leftRemove = 0;
  let rightRemove = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      leftRemove++;
    } else if (s[i] === ")" && leftRemove > 0) {
      leftRemove--;
    } else if (s[i] === ")") {
      rightRemove++;
    }
  }

  const result = new Set();

  function build(index, current, balance, leftRemove, rightRemove) {
    if (index === n) {
      if (leftRemove === 0 && rightRemove === 0 && balance === 0) {
        result.add(current);
      }
      return;
    }
    const char = s[index];

    if (char === "(") {
      if (leftRemove > 0) {
        build(index + 1, current, balance, leftRemove - 1, rightRemove);
      }
      build(index + 1, current + char, balance + 1, leftRemove, rightRemove);
    } else if (char === ")") {
      if (rightRemove > 0) {
        build(index + 1, current, balance, leftRemove, rightRemove - 1);
      }
      if (balance > 0) {
        build(index + 1, current + char, balance - 1, leftRemove, rightRemove);
      }
    } else {
      build(index + 1, current + char, balance, leftRemove, rightRemove);
    }
  }

  build(0, "", 0, leftRemove, rightRemove);

  return Array.from(result);
};

console.log(removeInvalidParentheses("()())()"));
