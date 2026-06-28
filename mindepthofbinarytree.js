function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const minDepth = function (root) {
  if (!root) return 0;

  function depth(node) {
    if (!node) return Infinity;

    if (!node.left && !node.right) {
      return 1;
    }

    return 1 + Math.min(depth(node.left), depth(node.right));
  }
  return depth(root);
};
