const TimeMap = function () {
  this.data = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.data.has(key)) {
    this.data.set(key, []);
  }

  this.data.get(key).push([timestamp, value]);
};

TimeMap.prototype.get = function (key, timestamp) {
  if (!this.data.has(key)) {
    return "";
  }

  const history = this.data.get(key);

  let left = 0;
  let right = history.length - 1;
  let result = "";

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const storedTimeStamp = history[mid][0];
    const storedValue = history[mid][1];

    if (storedTimeStamp <= timestamp) {
      result = storedValue;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};
