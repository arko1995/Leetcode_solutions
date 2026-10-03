var longestValidParentheses = function (s) {
  const n = s.length;
  const stack = [-1];
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "(") stack.push(i);
    else stack.pop();

    if (stack.length === 0) {
      stack.push(i);
    }

    let currentLength = i - stack[stack.length - 1];

    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
};

console.log(longestValidParentheses(")()())"));
