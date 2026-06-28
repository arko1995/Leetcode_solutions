var maximumLength = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let answer = 1;

  const ones = map.get(1) || 0;

  if (ones > 0) {
    answer = ones % 2 === 1 ? ones : ones - 1;
  }

  for (let x of map.keys()) {
    if (x === 1) continue;

    let current = x;
    let length = 0;

    while (map.get(current) >= 2) {
      current *= current;
      length += 2;
    }
    if (map.has(current)) length += 1;
    else length -= 1;

    answer = Math.max(answer, length);
  }

  return answer;
};

maximumLength([5, 4, 1, 2, 2]);
