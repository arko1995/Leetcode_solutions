 const plusOne = function(digits){

let intD = BigInt(digits.join(''))

 intD = intD + 1n

let res = intD.toString().split('').map(Number)

return res
}