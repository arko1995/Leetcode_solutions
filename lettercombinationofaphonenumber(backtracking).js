const letterCombinations = function(digits) {
        
    const phone = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }
    
    if(digits.length === 0) return []
    
    const result = []
    
    function backTrack(i, path){
        if (i===digits.length){
            result.push(path)
            return;
        } 
    
        let letters = phone[digits[i]]
        
        for(let ch of letters){
             backTrack(i+1, path+ch)
        }  
    
    }

    backTrack(0,"")
return result
};