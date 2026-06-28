var merge = function (nums1, m, nums2, n) {
  let merged = [...nums1.slice(0, m), ...nums2].sort((a, b) => a - b);

  for (let i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }
};
