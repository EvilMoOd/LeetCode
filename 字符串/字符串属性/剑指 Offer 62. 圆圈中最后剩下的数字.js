/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  // base case 最终活下来那个人的初始位置 当i为1时，当然是索引0啦
  let pos = 0;
  for (let i = 2; i <= n; i++) {
    pos = (pos + m) % i;
  }
  return pos;
  // 约瑟夫环,动态规划，但有点特殊,模拟流程就是,删除第m个元素后,落在第m+1位上,并且数组长度减一，那么就是fn（n）执行完之后，执行fn（n-1）
  // 可以反向递推，n=1时不删，n=2时删除第m个，落在m+1，恰好剩余一个，即为答案，以此作为关键，可以递推出n=3时，我们只需要在n=2基础上，往数组右边加一个元素，并且再走一遍删除流程，以落点即为剩余一个时的答案
};
