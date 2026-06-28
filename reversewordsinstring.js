const reverseWords = function(s){
    let s_ = s.split(" ")
    s_=s_.reverse()
    s_ = s_.filter(function(x){
        return x.length>0
    })

    return s_.join(" ")
}

console.log(reverseWords("the sky is blue"))