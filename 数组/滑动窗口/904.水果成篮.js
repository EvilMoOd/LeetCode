/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const map = new Map();
  let left = 0,
    right = 0;
  let max = 0,
    count = 0;
  while (right < fruits.length) {
    // 篮子里类型小于2，可以任意放
    if (map.size <= 2) {
      map.set(
        fruits[right],
        map.get(fruits[right]) ? map.get(fruits[right]) + 1 : 1
      );
      count++;
      right++;
    } else {
      // 篮子里类型大于2，拿出水果
      if (map.get(fruits[left]) > 1)
        map.set(fruits[left], map.get(fruits[left]) - 1);
      else map.delete(fruits[left]);
      count--;
      left++;
    }
    if (map.size <= 2) max = Math.max(max, count);
  }
  return max;
  // 又是一道滑动窗口题，可以直接while循环右边界，让左边界跟着右边界收缩
  // 特别注意最后判断最大值时，要保证篮子内水果种类不超过两种，因为每一次循环只负责放或丢，可能出现放完之后有三种水果的情况，这种情况不应该纳入答案条件
};
// @lc code=end
