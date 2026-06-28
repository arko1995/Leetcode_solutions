const romanToInt = function(s){

let outPut = 0;


let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

for(let i=0; i<s.length; i++){

    if(roman[s[i]]<roman[s[i+1]]){
        outPut -= roman[s[i]]
    }
    else{
        outPut += roman[s[i]]
    }
}

return outPut

}

