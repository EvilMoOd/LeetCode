/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let res = [];
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  for (let i = 0; i < people.length; i++)
    res.splice(people[i][1], 0, people[i]);
  return res;
  // 按身高排序后，局部进行队伍插入从而推出整条队伍，贪心
};
// @lc code=end
