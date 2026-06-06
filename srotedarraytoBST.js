function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.right = right === undefined ? null : right;
  this.left = left === undefined ? null : left;
}

const sortedArrayToBST = function (nums) {
  function build(left, right) {
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);

    return new TreeNode(nums[mid], build(left, mid - 1), build(mid + 1, right));
  }

  return build(0, nums.length - 1);
};
