function pivotIndex (nums){

let total = nums.reduce(function(a,b){
    return a+b
})

let leftSum = 0;

for(let i=0; i<nums.length; i++){
    let rightSum = total-leftSum-nums[i]

    if(leftSum === rightSum) return i

    leftSum += nums[i]
}

return -1
}

