const TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.right = right === undefined ? null : right;
  this.left = left === undefined ? null : left;
};

const preorderTraversal = function (root) {
  const output = [];

  function DFS(node) {
    if (!node) return;

    output.push(node.val);
    DFS(node.left);
    DFS(node.right);
  }
  DFS(root);
  return output;
};
