const TreeNode = function (val, left, right){

    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)

}

const lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q) return root

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    if(left && right) return root
    else return left || right
};