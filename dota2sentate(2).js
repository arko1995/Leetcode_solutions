function predictPartyVictory(senate){
let n = senate.length
let R = []
let D = []

for(let i=0; i<n; i++){
    if(senate[i] === "R") R.push(i)
        else D.push(i)
}

let r = 0;
let d = 0;

while(r < R.length && d < D.length){

    let rFront = R[r]
    let dFront = D[d]

    if(rFront<dFront){
        R.push(rFront+n)
    }
    else{
         D.push(dFront+n)
    }

    r++
    d++

}

return r<R.length ? "Radiant" : "Dire"

}