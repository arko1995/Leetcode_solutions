const TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

const deleteNode = function (root, key) {
  if (!root) return root;

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left && !root.right) return null;

    if (!root.left) return root.right;
    if (!root.right) return root.left;

    /**
     * successor goes right once and then goes left to find the smallest bigger value
     * we copy successor value into the node we want to delete
     * then we delete the successor
     */

    let successor = root.right;

    while (successor.left) {
      successor = successor.left;
    }

    //copy successor value into root value
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
  }

  return root;
};
