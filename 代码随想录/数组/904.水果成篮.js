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
  //滑动窗口解题
  let l = 0, maxLen = 0, arr = [fruits[l]];//初始化左指针，最大长度和水果种类数组
  let n = 0;//记录第二种类型的左窗口
  for (let r = 0; r < fruits.length; r++) {//开始跑右指针
    if (!arr.includes(fruits[r])) {
      l = n;//更新窗口的左边界
      //更新arr中水果的种类
      arr[0] = fruits[r - 1]
      arr[1] = fruits[r]
    }
    // 记录第二种水果类型边界，方便后续移动窗口
    if (fruits[r] != fruits[n]) {
      n = r
    }
    maxLen = Math.max(maxLen, r - l + 1)
  }
  return maxLen
};
// @lc code=end

