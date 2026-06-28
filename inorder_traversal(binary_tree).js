function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const inorderTraversal = function (root) {
  const result = [];
  function inOrder(root) {
    if (!root) return [];
    inOrder(root.left);
    result.push(root.val);
    inOrder(root.right);
  }
  inOrder(root);
  return result;
};
