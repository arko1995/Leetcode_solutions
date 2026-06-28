const TreeNode = function(val, left, right){
    this.val = (val===undefined?0:val)
    this.left = (left===undefined?null:left)
    this.right = (right===undefined?null:right)
}

const searchBST = function(root, val){
   let cur = root;

   while(cur){
    if(cur.val === val) return cur
    cur = val<cur.val ? cur.left:cur.right;
    }
    return null
}