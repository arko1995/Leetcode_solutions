const minSumSquareDiff = function (nums1, nums2, k1, k2) {
  const n = nums1.length;
  let k = k1 + k2;
  let maxDiff = 0;
  let totalDiff = 0;

  const diff = [];

  for (let i = 0; i < n; i++) {
    const d = Math.abs(nums1[i] - nums2[i]);
    diff.push(d);

    maxDiff = Math.max(maxDiff, d);
    totalDiff += d;
  }

  if (k >= totalDiff) return 0;

  const freq = new Array(maxDiff + 1).fill(0);

  for (const d of diff) {
    freq[d]++;
  }

  for (let d = maxDiff; d > 0 && k > 0; d--) {
    const operations = Math.min(k, freq[d]);

    freq[d] -= operations;
    freq[d - 1] += operations;

    k -= operations;
  }

  let result = 0;

  for (let d = 1; d <= maxDiff; d++) {
    result += freq[d] * d * d;
  }
  return result;
};

// minSumSquareDiff([1, 2, 3, 4], [2, 10, 20, 19], 0, 0);

console.log(minSumSquareDiff([1, 4, 10, 12], [5, 8, 6, 9], 1, 1));
