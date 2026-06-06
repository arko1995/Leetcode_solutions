const TreeNode = function(val, left, right){
    this.val = (val === undefined ? 0:val)
    this.left = (left === undefined ? null:left)
    this.right = (right === undefined ? null:right)
}

const maxLevelSum = function (root){
    let level = 1;
    let maxLevel = 1;
    let maxSum = -Infinity
    let q = [root]

    while(q.length>0){
        let head = 0;
        let end = q.length;
        let currentSum = 0

        for(; head<end; head++){
            let node = q[head]
            currentSum += node.val;

            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        q=q.slice(end)

    if(currentSum>maxSum){
        maxSum=currentSum;
        maxLevel=level
    }
    level++
    }

    return maxLevel
}