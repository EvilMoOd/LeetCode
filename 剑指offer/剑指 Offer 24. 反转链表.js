/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let left = null,
    right = null;
  while (head) {
    right = head.next;
    head.next = left;
    left = head;
    head = right;
  }
  // right和head都变成null越界，所以返回left
  return left;
};
