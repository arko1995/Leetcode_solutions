const findPeakElement = function(nums) {
let n = nums.length
let left = 0
let right = n-1


while(left<right){
    let mid = Math.floor((right+left)/2)

    if(nums[mid]<nums[mid+1]){
        left = mid+1
    }
    else {
        right = mid
    }
    
}
 return left
}

