const findDifference = function(nums1, nums2) {
  let s1 = new Set(nums1)
  let s2 = new Set(nums2)
  ans = [[],[]]
  
  for(let i of s1){
    if(!s2.has(i)){
        ans[0].push(i)
    }
  }

  for(let j of s2){
    if(!s1.has(j)){
        ans[1].push(j)
    }
  }

  return ans
};
