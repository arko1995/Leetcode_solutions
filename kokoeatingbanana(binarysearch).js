const minEatingSpeed = function (piles,h){

let left = 1
let right = Math.max(...piles)

const hoursNeeded = (k) => {
    let total = 0
    for (let pile of piles){
       total += Math.floor((pile+k-1)/k)
        
    }
    return total
}

while(left < right){
    let mid = Math.floor((left+right)/2)

    if(hoursNeeded(mid)<=h){
        right = mid
    }
    else{
        left = mid+1
    }
}

return left;
}