function successfulPairs(spells, potions, success){

let n = spells.length
let m = potions.length
let i=0
let output = []

while(i<n){
    let count = 0;

    for(let j=0; j<m; j++){
        if(spells[i]*potions[j]>=success){
            count++
            
        }
    }
    output.push(count)
    i++
}
return output
}