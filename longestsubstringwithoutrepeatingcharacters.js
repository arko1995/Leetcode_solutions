const lengthOfLongestSubstring = function(s) {

let maxLen = 0;

let map = new Map()

let i = 0;

for (let j=0; j<s.length; j++){

    let ch = s[j]

    if(map.has(ch) && map.get(ch)>=i){
        i = map.get(ch) + 1
    }
    
    map.set(ch, j)
    
    maxLen = Math.max(maxLen, j-i+1)

    
}

return maxLen
}





