let StockSpanner = function () {
  this.data = [];
};

StockSpanner.prototype.next = function (price) {
  let span = 1;

  while (this.data.length > 0) {
    let last = this.data[this.data.length - 1];

    let prevPrice = last[0];
    let oldSpan = last[1];

    if (prevPrice <= price) {
      span += oldSpan;
      this.data.pop();
    } else {
      break;
    }
  }
  this.data.push([price, span]);

  return span;
};
