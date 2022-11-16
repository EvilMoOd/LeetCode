/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 这道题本质上是遍历右子树并把节点上的左子树插到右子树中，抽象点说就是把树以右子树最右一条线作为一条链表，将其节点上所有左节点压缩成一条链表
  while (root) {
    // 当前节点没有左节点则跳到下一节点
    if (!root.left) root = root.right;
    // 否则将左节点以及左节点到其最右节点这一段节点插入到当前遍历节点和下一节点之间
    else {
      // 找到左节点最右子节点，将其指向当前遍历节点的下一节点，并将当前遍历节点右指针指向左节点（相当于插入链表段操作）
      let temp = root.left;
      while (temp.right) temp = temp.right;
      temp.right = root.right;
      root.right = root.left;
      root.left = null; //清空左指针
      root = root.right;
    }
  }
};
// @lc code=end
