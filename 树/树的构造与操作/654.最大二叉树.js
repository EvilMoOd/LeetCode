/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
var constructMaximumBinaryTree = function (nums) {
  const buildTree = (arr) => {
    if (!arr.length) return; //递归别忘记加终止条件了
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
    return new TreeNode(
      max,
      buildTree(arr.slice(0, index)),
      buildTree(arr.slice(index + 1))
    );
  };
  return buildTree(nums);
  // 和105题类似，通过数组不断切割来构造二叉树
};
// @lc code=end
