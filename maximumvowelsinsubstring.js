const maxVowels = function(s, k) {

let vowels = new Set (["a","e","i","o","u"])

let count = 0;
let maxCount = 0;

for(let i=0; i<k; i++){
    if(vowels.has(s[i])) count++
}
    maxCount = count

for(let j=k; j<s.length; j++){
    if(vowels.has(s[j])) count++
    if(vowels.has(s[j-k])) count--

    maxCount = Math.max(maxCount, count)
}

return maxCount

}


