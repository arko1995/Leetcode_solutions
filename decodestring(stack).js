const decodeString = function (s){

let stack = []
let curStr = ""
let curNum = 0

for (let ch of s) {

    if(ch >= "0" && ch <= "9"){
        curNum = curNum*10 + Number(ch);
    }
    else if (ch === "["){
        stack.push(curStr)
        stack.push(curNum)
        curStr = ""
        curNum = 0
    }
    else if (ch === "]"){
        let num = stack.pop()
        let prevStr = stack.pop()
        curStr = prevStr + curStr.repeat(num)
    }
    else{
        curStr += ch
    }

    
}
    return curStr
}
