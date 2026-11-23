const ProductOfNumbers = function () {
  this.data = [1];
};

ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.data = [1];
    return;
  }
  const last = this.data[this.data.length - 1];

  return this.data.push(last * num);
};

ProductOfNumbers.prototype.getProduct = function (k) {
  if (k >= this.data.length) {
    return 0;
  }
  return this.data[this.data.length - 1] / this.data[this.data.length - 1 - k];
};
