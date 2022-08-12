/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (!head) return [];
  let res = [];
  while (head.next) {
    res.unshift(head.val);
    head = head.next;
  }
  res.unshift(head.val);
  return res;
};
