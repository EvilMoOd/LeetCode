/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  // 注意这里快慢指针要初始化成不同值，否则下面循环不了
  let left = head.next,
    right = head.next.next;
  while (right && right.next && left !== right) {
    left = left.next;
    right = right.next.next;
  }
  if (!right || !right.next) return null;
  else left = head;
  while (left !== right) {
    left = left.next;
    right = right.next;
  }
  return left;
  // 公式法，略有一点难度
};
// @lc code=end
