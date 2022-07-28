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
  let fast = head.next.next,
    slow = head.next;
  while (fast && fast.next && fast !== slow) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (!fast || !fast.next) return null;
  // x为head到环入口路径，相遇点为o，y表示slow走过o路径，z表示slow离o没走过路径，环长=y+z
  // (x + y) * 2 = x + y + n (y + z)化简得x = (n - 1) (y + z) + z,n>=1,但圈数无论如何始终x=z，故得出以下结论
  // 公式推导head到环入口的路径等于fast、slow相遇时到入口的路径
  slow = head;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};
// @lc code=end
