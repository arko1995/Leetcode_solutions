const TreeNode = function(val, left, right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const rightSideView = function(root) {
    if(!root) return []

    let number = []
    let queue = [root]

    while(queue.length>0){
        let levelSize = queue.length

        for(let i=0; i<levelSize; i++){
            let node = queue.shift()

            if(i === levelSize-1) number.push(node.val)

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)

        }        
    }

    return number

};