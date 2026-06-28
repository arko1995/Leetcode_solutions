const TreeNode = function(val, left, right){
    this.val = (val===undefined ? 0:val)
    this.left = (left===undefined ? null:left)
    this.right = (right===undefined ? null:right)
}


const pathSum = function(root, targetSum){
    if(!root) return 0

    let count = 0

    let prefixCount = new Map()
    prefixCount.set(0,1)

    function DFS(node, prefixSum){

        if(!node) return null

        prefixSum = prefixSum + node.val

        count = count + (prefixCount.get(prefixSum-targetSum) || 0)

        prefixCount.set(prefixSum, (prefixCount.get(prefixSum) || 0) +1)

        DFS(node.left, prefixSum)
        DFS(node.right, prefixSum)

        prefixCount.set(prefixSum, (prefixCount.get(prefixSum))-1)

        
    }

    DFS(root, 0)

    return count
}