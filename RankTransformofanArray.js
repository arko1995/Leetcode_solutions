const arrayRankTransform = function (arr) {
  const copyArr = [...arr];
  copyArr.sort((a, b) => a - b);

  const map = new Map();

  let rank = 1;
  for (let ch of copyArr) {
    if (!map.has(ch)) {
      map.set(ch, rank++);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = map.get(arr[i]);
  }

  return arr;
};

arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]);
