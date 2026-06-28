var minElement = function (nums) {
  let output = [];
  let minElement = 0;

  for (let num of nums) {
    let digits = [];

    while (num) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    const sum = digits.reduce((acc, num) => acc + num);
    output.push(sum);
  }
  return Math.min(...output);
};

minElement([999, 19, 199]);
