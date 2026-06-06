const suggestedProducts = function (products, searchWord) {
  products.sort();

  let res = [];
  let prefix = "";
  let left = 0;

  for (let ch of searchWord) {
    prefix += ch;

    left = lowerBound(products, prefix, left);
    let cur = [];
    for (let i = left; i < products.length && cur.length < 3; i++) {
      if (products[i].startsWith(prefix)) cur.push(products[i]);
      else break;
    }
    res.push(cur);
  }
  return res;
};

function lowerBound(arr, target, start = 0) {
  let lo = start;
  let hi = arr.length;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] < target) lo = mid + 1;
    else hi = mid;
  }

  return lo;
}
