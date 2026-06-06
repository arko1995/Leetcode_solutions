const reverseVowels = function(s) {
  let Vowels = ["a","A","e","E","i","I","o","O","u","U"]
  
  let arr = [...s];

  let left = 0;
  let right = arr.length-1;


  while(left<right){
    
    if(!Vowels.includes(arr[left])){
        left++
        continue
    }
    if(!Vowels.includes(arr[right])){
        right--
        continue
    }

    [arr[left],arr[right]] = [arr[right], arr[left]]
    left++
    right-- 
}

  return arr.join("")

};