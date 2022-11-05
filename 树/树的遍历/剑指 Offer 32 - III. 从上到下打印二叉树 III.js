/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [],
    queue = [root];
  let reverse = false;
  while (queue.length) {
    let temp = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      reverse ? temp.unshift(node.val) : temp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(temp);
    reverse = !reverse;
  }
  return res;
};
