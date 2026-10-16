const sumCounts = function (nums) {
  const n = nums.length;
  const MOD = 1000000007;

  const sum = new Array(n * 4).fill(0);
  const sq = new Array(n * 4).fill(0);
  const lazy = new Array(n * 4).fill(0);

  function apply(node, left, right, val) {
    const len = right - left + 1;

    sq[node] = (sq[node] + 2 * val * sum[node] + val * val * len) % MOD;

    sum[node] = (sum[node] + val * len) % MOD;
    lazy[node] = (lazy[node] + val) % MOD;
  }

  function push(node, left, right) {
    if (lazy[node] === 0 || left === right) return;

    const mid = Math.floor((left + right) / 2);

    apply(node * 2, left, mid, lazy[node]);
    apply(node * 2 + 1, mid + 1, right, lazy[node]);

    lazy[node] = 0;
  }

  function update(node, left, right, ql, qr) {
    if (ql <= left && right <= qr) {
      apply(node, left, right, 1);
      return;
    }

    push(node, left, right);

    const mid = Math.floor((left + right) / 2);

    if (ql <= mid) {
      update(node * 2, left, mid, ql, qr);
    }
    if (qr > mid) {
      update(node * 2 + 1, mid + 1, right, ql, qr);
    }

    sum[node] = (sum[node * 2] + sum[node * 2 + 1]) % MOD;
    sq[node] = (sq[node * 2] + sq[node * 2 + 1]) % MOD;
  }
  const lastSeen = new Map();

  let result = 0;

  for (let i = 0; i < n; i++) {
    const prev = lastSeen.has(nums[i]) ? lastSeen.get(nums[i]) : -1;

    update(1, 0, n - 1, prev + 1, i);

    result = (result + sq[1]) % MOD;
    lastSeen.set(nums[i], i);
  }

  return result;
};
console.log(sumCounts([1, 2, 1]));
