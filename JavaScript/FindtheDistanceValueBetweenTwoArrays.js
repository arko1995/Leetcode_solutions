const findTheDistanceValue = function (arr1, arr2, d) {
  arr2.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let left = 0;
    let right = arr2.length - 1;
    let isValid = true;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr2[mid] < arr1[i] - d) {
        left = mid + 1;
      } else if (arr2[mid] > arr1[i] + d) {
        right = mid - 1;
      } else {
        isValid = false;
        break;
      }
    }
    if (isValid) count += 1;
  }
  return count;
};

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));
