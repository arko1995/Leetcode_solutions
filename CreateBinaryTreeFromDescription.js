function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const createBinaryTree = function (descriptions) {
  const map = new Map();
  const children = new Set();

  for (let [parent, child, isLeft] of descriptions) {
    if (!map.has(parent)) map.set(parent, new TreeNode(parent));
    if (!map.has(child)) map.set(child, new TreeNode(child));

    const parentNode = map.get(parent);
    const childNode = map.get(child);

    if (isLeft === 1) parentNode.left = childNode;
    else parentNode.right = childNode;

    children.add(child);
  }

  for (let [parent] of descriptions) {
    if (!children.has(parent)) return map.get(parent);
  }
};

createBinaryTree([
  [20, 15, 1],
  [20, 17, 0],
  [50, 20, 1],
  [50, 80, 0],
  [80, 19, 1],
]);
