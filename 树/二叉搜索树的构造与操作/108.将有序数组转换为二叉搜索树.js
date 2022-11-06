/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildTree = (arr) => {
    if (!arr.length) return;
    let mid = Math.floor(arr.length / 2);
    return new TreeNode(
      arr[mid],
      buildTree(arr.slice(0, mid)),
      buildTree(arr.slice(mid + 1))
    );
  };
  return buildTree(nums);
  // 类似分治的思想构造二叉树，因为是有序数组，所以只要找到中点，一分为二，左小右大
};
// @lc code=end
