function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
  if (!p && !q) return true;

  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return false;
};
