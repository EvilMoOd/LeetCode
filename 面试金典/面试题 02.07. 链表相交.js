/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headB || !headA) return null;
  let n1 = headA,
    n2 = headB;
  while (n1 !== n2) {
    n1 = n1 ? n1.next : headB;
    n2 = n2 ? n2.next : headA;
  }
  return n1;
};
