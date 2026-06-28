const closeStrings = function(word1, word2) {

if(word1.length !== word2.length) return false

let m1 = new Map()
let m2 = new Map()

for(let ch of word1) m1.set(ch, (m1.get(ch) || 0)+1)
for(let ch of word2) m2.set(ch, (m2.get(ch) || 0)+1)

if(m1.size !== m2.size) return false
for(let key of m1.keys()){
    if(!m2.has(key))
        return false
}

let c1 = [...m1.values()].sort((a,b) => (a-b))
let c2 = [...m2.values()].sort((a,b) => (a-b))

for(let i=0; i<c1.length; i++){
    if(c1[i] !== c2[i])
        return false
}
return true
}