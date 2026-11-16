const digitSum = function (s, k) {
  while (s.length > k) {
    let string = "";
    let i = 0;
    while (i < s.length) {
      let currentString = "";

      currentString += s.slice(i, i + k);

      string += currentString
        .split("")
        .map((str) => {
          return Number(str);
        })
        .reduce((a, b) => a + b, 0);

      i += k;
    }

    s = string;
  }

  return s;
};

digitSum("11111222223", 3);
