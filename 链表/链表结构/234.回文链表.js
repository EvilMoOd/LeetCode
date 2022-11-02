/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res.join('') === res.reverse().join('');
  // 感觉有点作弊。。。转换成回文串题即可
};
// @lc code=end
