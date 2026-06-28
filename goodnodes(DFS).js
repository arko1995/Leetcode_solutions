const TreeNode = function(val ,left, right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const goodNodes = function(root){

    if(!root) return 0
    if(!root.left && !root.right) return 1
    let maxCount = 0  
    
    function dfs(node, maxValue){
        if(!node) return
        let newMaxValue = Math.max(maxValue, node.val)
        
        if(node.val >= maxValue){
            maxCount++
        }
        dfs(node.left, newMaxValue)
        dfs(node.right, newMaxValue)
    }

    dfs(root, root.val)

    return maxCount

}