const predictPartyVictory = function(senate){
let n = senate.length

let Radiant = []

let Dire = []

for(let i=0; i<n; i++){
    if(senate[i] === "R") Radiant.push(i)
        else Dire.push(i)
}

while(Radiant.length && Dire.length){
    
    let rFront = Radiant.shift()
    let dFront = Dire.shift()

    if(rFront < dFront){
            // Dire.shift()
            // Radiant.shift()
            Radiant.push(rFront+n)
        }
        else{
            Dire.push(dFront+n)
        }
    
}

if(Radiant.length>0) return "Radiant"
    else return "Dire"

}