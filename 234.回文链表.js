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
    //1、双指针。2、转换成数组
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.join('') === arr.reverse().join('')
};
// @lc code=end

