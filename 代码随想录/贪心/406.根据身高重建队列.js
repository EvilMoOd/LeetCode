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
  // 先按身高排序，之后再按照k插入排序即可（此时有k个人比他高）
  // 用例有bug，都正确情况下，规定kj小的优先在左边，故下面排序得这样写
  people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
  for (const i in people) {
    let item = people.splice(i, 1).flat()
    people.splice(item[1], 0, item)
  }
  return people
};
// @lc code=end

