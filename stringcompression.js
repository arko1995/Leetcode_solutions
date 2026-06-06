let compress = function(chars){
let n=chars.length
let write = 0, read = 0

while(read<n){
    let char = chars[read]
    let count = 0; 
    while(read<n && chars[read]===char){
        read++
        count++
    }
    chars[write++] = char //assigns value of char to chars[write], write is the index position. incrementing write afterwards
    if(count>1){
        for(digit of count.toString()){
            chars[write++] = digit  //now assign the counts value to write position (after increment).
        }
    }

    
}
return write;
}