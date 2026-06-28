const maxOperations = function(nums, k) {
    
    let map = new Map()
    let count = 0;

    for(let ch of nums){

        let y = k - ch

        if(map.get(y)>0){
            count++
            map.set(y, map.get(y)-1)
        }
        else{
            map.set(ch, (map.get(ch) || 0)+1)
        }
    }
    return count
};