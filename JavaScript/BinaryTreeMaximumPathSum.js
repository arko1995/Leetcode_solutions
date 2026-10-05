function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const maxPathSum = function (root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));

    const currentSum = node.val + left + right;

    maxSum = Math.max(maxSum, currentSum);

    return node.val + Math.max(left, right);
  }

  dfs(root);
  return maxSum;
};

maxPathSum([1, 2, 3]);
