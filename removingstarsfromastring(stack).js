const removeStars = function(s){


let result = []

for(let ch of s){
    
    
    if(ch === "*" && result.length !== 0){
        result.pop()
    }
    else{
        result.push(ch)
    }
    
    
}

return result.join('')

}