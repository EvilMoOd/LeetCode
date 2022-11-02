/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
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
  let left = headA,
    right = headB;
  while (left || right) {
    if (!left) left = headB;
    if (!right) right = headA;
    if (left === right) return left;
    left = left.next;
    right = right.next;
  }
  return null;
  // 双指针遍历交叉点
};
// @lc code=end
