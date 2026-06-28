const processStr = function (s) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let char of s) {
    if (alphabets.includes(char)) {
      result += char;
    }

    if (result.length > 0 && char === "*") {
      result = result.slice(0, -1);
    }
    if (char === "#") {
      result += result;
    }
    if (char === "%") {
      result = result.split("").reverse().join("");
    }
  }

  return result;
};

processStr("a#b%*");
