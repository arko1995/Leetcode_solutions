function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const rob = function (root) {
  function dfs(node) {
    if (!node) return [0, 0];

    const left = dfs(node.left);
    const right = dfs(node.right);

    const robCurrent = node.val + left[1] + right[1];

    const skipCurrent =
      Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [robCurrent, skipCurrent];
  }
  const [robRoot, skipRoot] = dfs(root);

  return Math.max(robRoot, skipRoot);
};

rob([3, 2, 3, null, 3, null, 1]);
