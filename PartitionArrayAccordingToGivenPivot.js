var pivotArray = function (nums, pivot) {
  const n = nums.length;
  const arr = Array(n).fill(0);

  let p = 0;
  let q = n - 1;

  for (let l = 0, r = n - 1; l < n; l++, r--) {
    const nl = nums[l];
    const nr = nums[r];

    if (nl < pivot) arr[p++] = nl;
    if (nr > pivot) arr[q--] = nr;
  }

  while (p <= q) {
    arr[p++] = pivot;
  }

  return arr;
};

pivotArray([9, 12, 5, 10, 14, 3, 10], 10);
