/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // for (let i = nums.length-1; i >= 0; i--) {
    //     if (nums[i] == 0) {
    //         nums.splice(i,1)
    //         nums.push(0)
    //     }
    // }
    // return nums
    let i = 0;//统计前面0的个数
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] == 0) {//如果当前数字是0就不操作
            i++;
        } else if (i != 0) {
            //否则，把当前数字放到最前面那个0的位置，然后再把
            //当前位置设为0
            nums[j - i] = nums[j];
            nums[j] = 0;
        }
    }
};
// @lc code=end

