var levelOrder = function (root) {
  //二叉树的层序遍历
  let res = [],
    queue = [];
  queue.push(root);
  if (!root) return res;
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(level);
  }
  return res;
};
