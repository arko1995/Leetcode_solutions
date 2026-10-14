const maxSumOfSquares = function (num, sum) {
  if (sum > 9 * num) return "";

  let digits = Array(num).fill(9);

  const sumOfDigits = digits.reduce((a, b) => a + b);

  let difference = sumOfDigits - sum;

  let index = num - 1;
  while (difference > 0) {
    let subtract = Math.min(9, difference);

    digits[index] -= subtract;
    difference -= subtract;

    index--;
  }

  return digits.join("");
};
console.log(maxSumOfSquares((num = 2), (sum = 3)));
