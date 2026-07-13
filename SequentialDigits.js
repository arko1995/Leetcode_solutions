const sequentialDigits = function (low, high) {
  const digits = "123456789";
  const answer = [];

  for (let length = 2; length <= 9; length++) {
    for (let start = 0; start + length <= digits.length; start++) {
      let number = Number(digits.slice(start, start + length));
      if (number >= low && number <= high) {
        answer.push(number);
      }
    }
  }
  return answer;
};

sequentialDigits(100, 300);
