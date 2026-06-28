function largestAltitude(gain){

let altitude = 0
let gainChange = 0

for(let i=0; i<gain.length; i++){
    
    gainChange += gain[i]
    altitude = Math.max(altitude, gainChange)

}

return altitude
}



