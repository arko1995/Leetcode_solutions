const majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) candidate = num;

    count += num === candidate ? 1 : -1;
  }
  return candidate;
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);
