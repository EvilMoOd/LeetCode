/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) return head.next;
  let node = head;
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
      return head;
    }
    node = node.next;
  }
};
