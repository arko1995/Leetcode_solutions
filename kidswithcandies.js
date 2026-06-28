let candies = [2,3,5,1,3] 

let extraCandies = 3

let higestNumberOfCandies = Math.max(...candies)
let result = []
for(let ch of candies){
    if(ch+extraCandies >= higestNumberOfCandies) result.push(true)
    else result.push(false)

    
}
return result


console.log(result)