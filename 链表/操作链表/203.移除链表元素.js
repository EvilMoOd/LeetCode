/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 迭代
  let pre = new ListNode(null, head);
  let cur = pre;
  while (cur.next) {
    if (cur.next.val === val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return pre.next;
  // 递归
  if (head == null) return null;
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
  // 同样是递归和迭代，链表入门操作题
};
// @lc code=end
