function ListNode(val, next){
    this.val = (val === undefined ? 0: val)
    this.next = (next === undefined ? null: next)
}

const deleteMiddle = function(head){
    
    if(head === null || head.next === null) return null

    let dummy = new ListNode()

    dummy.next = head

    let slow = dummy
    let fast = head

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

    slow.next = slow.next.next

    return dummy.next

} 