const TreeNode = function(val, left, right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const longestZigZag = function(root){
    if(!root) return 0

    let best = 0;

    function dfs(node, dir, len){
        if(!node) return 

        best = Math.max(best, len)

        if(node.left){
            dfs(node.left,0,dir === 1 ? len+1:1)
        }

        if(node.right){
            dfs(node.right, 1, dir===0 ? len+1:1)
        }
    }

    dfs(root, 0, 0)
    dfs(root, 1, 0)

    return best
    
}