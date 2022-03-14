/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
    //1、双指针.2、栈。
    let pre = null,
        post = null;
    while (head) {
        post = head.next
        head.next = pre
        pre = head
        head = post
    }
    return pre
};
// @lc code=end

