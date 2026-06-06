function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const hasPathSum = function (root, targetSum) {
  if (!root) return false;

  function DFS(node, remainingSum) {
    if (!node) return false;

    remainingSum -= node.val;

    if (!node.left && !node.right) {
      return remainingSum === 0 ? true : false;
    }

    return DFS(node.left, remainingSum) || DFS(node.right, remainingSum);
  }

  return DFS(root, targetSum);
};
