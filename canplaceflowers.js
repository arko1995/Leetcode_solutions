const canPlaceFlowers = function(flowerbed, n) {
let count=0;

for(let i=0; i<flowerbed.length; i++){
  
    if(flowerbed[i] === 1) continue

    let leftempty = (i===0 || flowerbed[i-1] ===0);
    let rightempty = (i===flowerbed.length-1 || flowerbed[i+1]===0)

    if(leftempty && rightempty){
        flowerbed[i] = 1;
        count++
    }
}
 if(count>=n) return true
 else return false
}