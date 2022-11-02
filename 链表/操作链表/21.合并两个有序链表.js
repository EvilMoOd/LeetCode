/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 迭代
  const head = new ListNode();
  let cur = head;
  while (list1 && list2) {
    //循环两个链表
    if (list1.val <= list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 === null ? list2 : list1; //两个链表一个遍历完，另一个可能还没遍历完，没遍历完的接上
  return head.next;
  // 递归
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
  // 本题主要是创建链表与链表赋值方面的入门
  // 可以用迭代法构建新的链表将链表一个个比对后拼接，也可以用递归法将链表归一化
};
// @lc code=end
