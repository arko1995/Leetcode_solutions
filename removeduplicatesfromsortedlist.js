const deleteDuplicates = function (head) {
  let root = head;

  while (root && root.next) {
    if (root.val === root.next.val) {
      root.next = root.next.next;
    } else {
      root = root.next;
    }
  }
  return head;
};
