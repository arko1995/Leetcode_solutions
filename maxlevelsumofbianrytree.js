const TreeNode = function(val, left, right){
    this.val = (val === undefined ? 0:val)
    this.left = (left === undefined ? null:left)
    this.right = (right === undefined ? null:right)
}

const maxLevelSum = function(root) {
  if(!root) return []
  let queue = [root]
    let level = 1;
    let maxLevel = 1;
    let maxSum = -Infinity

    while(queue.length>0){
        let levelSize = queue.length
        let currentSum = 0;
        for(let i=0; i<levelSize; i++){
            let node = queue.shift()
            currentSum += node.val


            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        
        if(currentSum>maxSum){
            maxSum=currentSum
            maxLevel=level
        }
        level++
    }
    return maxLevel
};