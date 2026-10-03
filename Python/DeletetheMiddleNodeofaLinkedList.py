class ListNode:
    def __init__(self, val=0, next=None) -> None:
        self.val = val
        self.next = next


class Solution:
    def deleteMiddle(self, head: ListNode | None) -> ListNode | None:

        if head == None or head.next == None:
            return None

        dummy = ListNode()
        dummy.next = head

        slow = dummy
        fast = head

        while fast != None and fast.next != None:
            slow = slow.next
            fast = fast.next.next

        slow.next = slow.next.next

        return dummy.next
