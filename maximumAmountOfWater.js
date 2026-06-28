const maxArea = function(height){
let n = height.length

let i = 0;
let j = n-1

let output = 0;

while(i<j && j>i){
    let y = Math.min(height[i], height[j])
    let x = j-i
    
    let area = x*y

     if(height[i]>height[j]){
        j--
    }
    else{
        i++
    }

    if(area>output){
        output=area
    }  
}
return output
}

