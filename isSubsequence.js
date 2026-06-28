const isSubsequence = function(s, t) {

let count = 0;

let i = 0;
let j = 0;

while(i<s.length && j<t.length){
    if(s[i]===t[j]){
        i++
        count++
    }
    j++
   
}

if(count===s.length) return true
else return false
}