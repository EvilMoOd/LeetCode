/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 1、求表长再修改（循环或递归）。2、双指针，fast先走n，再同步走直到fast到末尾。3、栈
    let ret = new ListNode(0, head),
        slow = fast = ret;
    //fast先移动
    while (n--) {
        fast = fast.next
    }
    //判断是否超过链表长度
    if (!fast) return ret.next;
    //同时移动
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return ret.next
};
// @lc code=end

