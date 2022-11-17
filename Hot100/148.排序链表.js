/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  // 利用快慢指针找到中点，将左指针next置空（分两段链表）
  if (!head || !head.next) return head;
  let left = head,
    right = head.next;
  while (right && right.next) {
    left = left.next;
    right = right.next.next;
  }
  let mid = left.next;
  left.next = null;
  // 分治
  left = sortList(head);
  right = sortList(mid);
  // 重新构建一条新的链表，用比左右元素大小排序
  let newHead = new ListNode(0),
    cur = newHead;
  while (left || right) {
    if (!right || (left && left.val < right.val)) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  return newHead.next;
};
// @lc code=end
