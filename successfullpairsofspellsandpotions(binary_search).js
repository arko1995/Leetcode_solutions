function successfulPairs(spells, potions, success){
potions.sort((a,b)=>a-b)
let m = potions.length


let result = []

for(let spell of spells){
    let left = 0;
    let right = m-1
    
    let idx = m
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(spell*potions[mid]>=success){
            idx = mid
            right = mid-1
        }
        else{
            left = mid+1
        }

    }

    result.push(m-idx)


}
return result

}



