const totalNumbers = function (digits) {
  const numbers = new Set();

  const n = digits.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        if (digits[i] === 0) continue;

        const number = digits[i] * 100 + digits[j] * 10 + digits[k];

        if (number % 2 === 0) numbers.add(number);
      }
    }
  }
  return numbers.size;
};
console.log(totalNumbers([1, 2, 3, 4]));
