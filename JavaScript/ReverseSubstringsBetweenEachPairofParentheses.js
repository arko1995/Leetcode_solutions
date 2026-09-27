const reverseParentheses = function (s) {
  const stack = [];
  let current = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(current);
      current = "";
    } else if (s[i] === ")") {
      current = stack.pop() + current.split("").reverse().join("");
    } else {
      current += s[i];
    }
  }

  return current;
};

console.log(reverseParentheses("(u(love)i)"));
