function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSymmetric = function (root) {
  if (!root) return true;
  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    if (left.val === right.val) {
      return (
        isMirror(left.left, right.right) && isMirror(left.right, right.left)
      );
    }
    return false;
  }
  return isMirror(root.left, root.right);
};
