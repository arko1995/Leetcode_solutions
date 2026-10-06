const minAddToMakeValid = function (s) {
  const n = s.length;

  let openingBracket = 0;
  let closingBracket = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") openingBracket++;
    else if (s[i] === ")" && openingBracket > 0) {
      openingBracket--;
    } else {
      closingBracket++;
    }
  }

  return openingBracket + closingBracket;
};

console.log(minAddToMakeValid("())"));
