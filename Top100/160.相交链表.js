/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 1、这里求出两条链表的长度差，让长的链表向短链表的起点看齐，同时起步即可求出相交点
  const getLength = (nodeList) => {
    let node = nodeList,
      len = 0;
    while (node) {
      node = node.next;
      len++;
    }
    return len;
  };
  let lenA = getLength(headA),
    lenB = getLength(headB);
  let walk = Math.abs(lenA - lenB);
  if (getLength(headA) - getLength(headB) > 0) {
    while (walk) {
      walk--;
      headA = headA.next;
    }
  } else {
    while (walk) {
      walk--;
      headB = headB.next;
    }
  }
  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;

  // 2、或者使两条链表同时遍历一遍之后再到相互位置再遍历到相交点，因为a+c+b=b+c+a,c为共同路径
  if (!headA || !headB) return null;
  let PA = headA,
    PB = headB;
  while (PA !== PB) {
    PA = PA ? PA.next : (PA = headB);
    PB = PB ? PB.next : (PB = headA);
  }
  return PA;
};
// @lc code=end
