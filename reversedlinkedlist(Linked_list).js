const ListNode = function(val,next){
    this.val = (val === undefined ? 0:val)
    this.next = (next === undefined ? null:val)
}

const reverseList = function(head){

    if(!head || !head.next) return head
    let prev = null
    let curr = head

    while(curr){
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
    }

    return prev
}