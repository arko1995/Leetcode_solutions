var RandomizedSet = function () {
  this.data = new Map();
  this.arr = [];
};

RandomizedSet.prototype.insert = function (val) {
  if (this.data.has(val)) return false;

  this.arr.push(val);
  this.data.set(val, this.arr.length - 1);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.data.has(val)) return false;

  const index = this.data.get(val);
  const lastValue = this.arr[this.arr.length - 1];

  this.arr[index] = lastValue;
  this.data.set(lastValue, index);

  this.arr.pop();
  this.data.delete(val);
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex];
};
