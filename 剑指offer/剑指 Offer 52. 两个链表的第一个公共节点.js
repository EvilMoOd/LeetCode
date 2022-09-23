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
  // 2、或者使两条链表同时遍历一遍之后再到相互位置再遍历到相交点，因为a+c+b=b+c+a,c为共同路径
  if (!headA || !headB) return null;
  let PA = headA,
    PB = headB;
  while (PA !== PB) {
    PA = PA ? PA.next : (PA = headB);
    PB = PB ? PB.next : (PB = headA);
  }
  return PA;
};