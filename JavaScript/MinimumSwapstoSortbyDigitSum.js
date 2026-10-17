const minSwaps = function (nums) {
  const n = nums.length;

  const arr = [];

  for (let i = 0; i < n; i++) {
    let ch = nums[i];
    let result = 0;
    while (ch > 0) {
      result += ch % 10;
      ch = Math.floor(ch / 10);
    }
    arr.push({ num: nums[i], digitSum: result, originalIndex: i });
  }

  arr.sort((a, b) => {
    if (a.digitSum !== b.digitSum) {
      return a.digitSum - b.digitSum;
    }
    return a.num - b.num;
  });

  const visited = Array(n).fill(false);
  let swap = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i] || arr[i].originalIndex === i) {
      continue;
    }

    let cycleSize = 0;
    let j = i;

    while (!visited[j]) {
      visited[j] = true;
      j = arr[j].originalIndex;
      cycleSize++;
    }

    swap += cycleSize - 1;
  }
  return swap;
};

console.log(minSwaps([22, 14, 33, 7]));
