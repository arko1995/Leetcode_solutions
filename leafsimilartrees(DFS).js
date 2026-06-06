const TreeNode = function(val, left, right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const leafSimilar = function(root1, root2){
    
    let leftTree = []
    let rightTree = []

    function Dfs(node, array){
        if(!node) return
        if(!node.left && !node.right){
            array.push(node.val)
            return;
        }

        Dfs(node.left, array)
        Dfs(node.right, array)
    }

    Dfs(root1, leftTree)
    Dfs(root2, rightTree)

    if(leftTree.length !== rightTree.length) return false

    for(let i=0; i<leftTree.length; i++){
        if(leftTree[i] !== rightTree[i]) return false
    }

    return true


}