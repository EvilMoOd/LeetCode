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
  if (!head.next) return;
  let right = head;
  for (let i = 1; i < k; i++) {
    right = right.next;
  }
  let left = head;
  while (right.next) {
    left = left.next;
    right = right.next;
  }
  return left;
};
