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
    let l = null,
        r = null;
    while (head) {
        r = head.next//右指针记录下一个节点
        head.next = l//翻转链
        l = head//左指针移动到head节点位置
        head = r//head节点移动到右指针位置，也就是第一步记录时的head.next
    }
    return l//返回首元节点
};
// @lc code=end

