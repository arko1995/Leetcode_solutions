const countMajoritySubarrays = function (nums, target) {
  const n = nums.length;
  const offset = n + 2;
  const tree = Array.from({ length: 2 * n + 5 }).fill(0);
  console.log(tree);

  function update(index) {
    while (index < tree.length) {
      tree[index]++;
      index += index & -index;
    }
  }

  function query(index) {
    let count = 0;

    while (index > 0) {
      count += tree[index];
      index -= index & -index;
    }
    return count;
  }

  let prefixSum = 0;
  let output = 0;

  update(offset);

  for (const num of nums) {
    prefixSum += num === target ? 1 : -1;

    const index = prefixSum + offset;

    output += query(index - 1);
    update(index);
  }
  return output;
};

countMajoritySubarrays([1, 2, 2, 3], 2);
