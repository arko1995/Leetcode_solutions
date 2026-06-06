
const ListNode = function(val, next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


const pairSum = function(head){

if(!head || !head.next) return 0

let maxSum = 0

let slow = head;
let fast = head;

while(fast && fast.next){
slow = slow.next
fast = fast.next.next
}

let prev = null;
let curr = slow

while(curr){
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
}

let left = head
let right = prev

while(right){

maxSum = Math.max(maxSum, left.val+right.val)
left = left.next
right = right.next

}

return maxSum

}