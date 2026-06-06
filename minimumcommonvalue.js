const getCommon = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let ans = -1;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) return nums1[i];
    else if (nums1[i] < nums2[j]) i++;
    else j++;
  }
  return ans;
};
