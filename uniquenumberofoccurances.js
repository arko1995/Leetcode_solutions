const uniqueOccurrences = function(arr) {

let count = new Map()

for(let i of arr){
    count.set(i, (count.get(i) || 0)+1)
}

let unique = []

for (let [key,value] of count){
    unique.push(value)
}

let uniqueVal = new Set(unique)


if(unique.length === uniqueVal.size) return true
else return false

}