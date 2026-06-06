var findMaxAverage = function(nums, k) {

let maxSum = -Infinity;
let curSum = 0;

for(let i=0; i<k; i++){
    curSum += nums[i]
}

maxSum = curSum

for(let i=k; i<nums.length; i++){
    curSum += nums[i] - nums[i-k]

    maxSum = Math.max(maxSum, curSum)
}

return maxSum/k
}