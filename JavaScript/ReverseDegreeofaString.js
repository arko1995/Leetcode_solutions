const reverseDegree = function (s) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  const reversed = {};

  const n = alphabets.length;

  for (let i = 0; i < n; i++) {
    reversed[alphabets[i]] = n - i;
  }

  let output = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const index = i + 1;
    const reversedIndex = reversed[ch];
    const product = reversedIndex * index;
    output += product;
  }

  return output;
};

console.log(reverseDegree("abc"));
