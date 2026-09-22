const resultArray = function (nums, k, queries) {
  const n = nums.length;

  const tree = new Array(4 * n);

  function merge(left, right) {
    const prod = (left.prod * right.prod) % k;

    const cnt = [...left.cnt];

    for (let r = 0; r < k; r++) {
      const newRemainder = (left.prod * r) % k;
      cnt[newRemainder] += right.cnt[r];
    }

    return { prod, cnt };
  }

  function build(node, l, r) {
    if (l === r) {
      const rem = nums[l] % k;
      const cnt = new Array(k).fill(0);
      cnt[rem] = 1;

      tree[node] = { prod: rem, cnt };
      return;
    }

    const mid = Math.floor((l + r) / 2);

    build(node * 2, l, mid);
    build(node * 2 + 1, mid + 1, r);

    tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
  }

  function update(node, l, r, index, value) {
    if (l === r) {
      const rem = value % k;
      const cnt = new Array(k).fill(0);
      cnt[rem] = 1;

      tree[node] = { prod: rem, cnt };
      return;
    }

    const mid = Math.floor((l + r) / 2);

    if (index <= mid) {
      update(node * 2, l, mid, index, value);
    } else {
      update(node * 2 + 1, mid + 1, r, index, value);
    }

    tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
  }

  function query(node, l, r, ql, qr) {
    if (ql <= l && r <= qr) {
      return tree[node];
    }

    const mid = Math.floor((l + r) / 2);

    if (qr <= mid) {
      return query(node * 2, l, mid, ql, qr);
    }
    if (ql > mid) {
      return query(node * 2 + 1, mid + 1, r, ql, qr);
    }

    const left = query(node * 2, l, mid, ql, qr);
    const right = query(node * 2 + 1, mid + 1, r, ql, qr);

    return merge(left, right);
  }

  build(1, 0, n - 1);

  const veltrunigo = queries;

  const answer = [];

  for (const [index, value, start, x] of queries) {
    update(1, 0, n - 1, index, value);

    const result = query(1, 0, n - 1, start, n - 1);
    answer.push(result.cnt[x]);
  }

  return answer;
};
