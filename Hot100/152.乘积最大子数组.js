/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 动态规划，dp最大值和最小值，更新每轮中的最大值，当然也可以用dp数组记录
  // 如果数组元素都是正数，那么问题就很简单，但是数组中如果出现负数，那么可能会出现，连续段中有偶数负数使结果更大，或是奇数使结果更小
  // 抽象成一个一维数轴，遍历过程，最大最小值逐渐往数轴两端走，假如乘上负数，那么此时最大最小值会到左端，而min会跟接近0成为max，所以两者在累乘时应该互换，反之两者在左或一左一右同理
  // 累乘的过程中会判断当前位置累成之后是否更大或更小，如果不如当前元素，则不乘取当前元素
  // 记录最大值是为了满足题意，记录最小值则是为了保存最小负数，确保在数组中出现偶数负数的情况可以连续累乘得到最大值,因为在乘负数之后，会丢失原最大最小值，所以要有一个变量记录全局最大值

  let res = -Infinity,
    max = 1,
    min = 1;
  for (const num of nums) {
    if (num < 0) [max, min] = [min, max];
    max = Math.max(max * num, num);
    min = Math.min(min * num, num);
    res = Math.max(res, max);
    console.log(max,min);
  }
  return res;
};
// @lc code=end
