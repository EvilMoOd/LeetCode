/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let cur = head;
  while (k) {
    cur = cur.next;
    k--;
  }
  while (cur) {
    cur = cur.next;
    head = head.next;
  }
  return head;
};
