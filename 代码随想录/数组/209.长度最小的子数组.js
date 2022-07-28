/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    //暴力解法就是循环一层，里面再循环一层
    //滑动窗口，跟双指针类似，区域变动
    let i = 0, j = 0, sum = 0, minLen = Infinity;
    while (i < nums.length) {
        //扩张到合适值
        sum += nums[i];
        // 开始收缩范围
        while (sum >= target) {
            minLen = Math.min(minLen, i - j + 1)
            sum -= nums[j];
            j++
        }
        i++
    }
    return minLen === Infinity ? 0 : minLen
};
// @lc code=end

