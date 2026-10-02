const generateParenthesis = function (n) {
  const result = [];

  function backtrack(current, openCount, closeCount) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (openCount < n) {
      backtrack(current + "(", openCount + 1, closeCount);
    }
    if (closeCount < openCount) {
      backtrack(current + ")", openCount, closeCount + 1);
    }
  }

  backtrack("", 0, 0);

  return result;
};

console.log(generateParenthesis(3));
