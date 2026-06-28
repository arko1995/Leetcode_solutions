const hIndex = function (citations) {
  let values = citations.sort((a, b) => b - a);

  let possibleIndex = 0;

  for (let i = 0; i < values.length; i++) {
    let citationsNum = values[i];
    let paper = i + 1;

    if (citationsNum >= paper) {
      possibleIndex++;
    }
  }

  return possibleIndex;
};

hIndex([1, 3, 1]);
