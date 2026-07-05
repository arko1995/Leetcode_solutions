function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const postorderTraversal = function (root) {
  const output = [];

  function DFS(node) {
    if (!node) return;

    DFS(node.left);
    DFS(node.right);

    output.push(node.val);
  }

  DFS(root);

  return output;
};
