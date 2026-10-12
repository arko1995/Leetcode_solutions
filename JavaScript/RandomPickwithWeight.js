var Solution = function (w) {
  this.prefix = [];

  let sum = 0;

  for (const weight of w) {
    sum += weight;

    this.prefix.push(sum);
  }

  this.total = sum;
};

Solution.prototype.pickIndex = function () {
  const target = Math.floor(Math.random() * this.total) + 1;

  let left = 0;
  let right = this.prefix.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (this.prefix[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
