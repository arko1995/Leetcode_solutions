const twoSum = function(nums, target) {
    let n = nums.length

    let map = new Map()

    for(let i=0; i<n; i++){
        let x = nums[i]
        let y = target - x

        if(map.has(y)){
            return [map.get(y),i]
        }
        else{
            map.set(x,i)
        }
    }
};