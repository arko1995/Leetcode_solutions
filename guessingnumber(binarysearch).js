// let pick = Math.floor((Math.random()*n)+1)

// function guess(x){
//     if(x<pick) return 1
//     if(x>pick) return -1
//     return 0
// }

const guessNumber = function(n) {
    let left = 1;
    let right = n;

    while(left<=right){
    let mid = left+(Math.floor((right-left)/2))
    let res = guess(mid)

    if(res === -1) right = mid-1
    else if(res === 1) left = mid+1
    else return mid
    }
};