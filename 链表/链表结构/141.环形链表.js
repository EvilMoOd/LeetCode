/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let left = head,
    right = head;
  while (right.next && right.next.next) {
    left = left.next;
    right = right.next.next;
    if (left === right) return true;
  }
  return false;
  // 链表快慢指针，注意空链表
};
// @lc code=end
