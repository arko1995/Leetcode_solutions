const SnapshotArray = function (length) {
  this.snapId = 0;

  this.data = Array.from({ length: length }, () => [[0, 0]]);
};

SnapshotArray.prototype.set = function (index, val) {
  const indexHistory = this.data[index];
  const lastEntry = indexHistory[indexHistory.length - 1];

  if (lastEntry[0] === this.snapId) {
    lastEntry[1] = val;
  } else {
    indexHistory.push([this.snapId, val]);
  }
};

SnapshotArray.prototype.snap = function () {
  return this.snapId++;
};

SnapshotArray.prototype.get = function (index, snap_id) {
  const indexHistory = this.data[index];

  let left = 0;
  let right = indexHistory.length - 1;
  let answer = 0;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (indexHistory[middle][0] <= snap_id) {
      answer = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return indexHistory[answer][1];
};
