const TreeNode = function(val, left, right){    

    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)

}

const maxDepth = function (root) {
    
    if(!root) return 0

    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)
 
    return Math.max(leftDepth, rightDepth) + 1
}