const isValid = function (s) {
  const stack = [];

  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else {
      if (stack[stack.length - 1] !== map[ch]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
