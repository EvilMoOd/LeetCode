/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums == null || nums.length == 0)
        return 0;
    let left = 0;
    for (let right = 1; right < nums.length; right++)
        //如果左指针和右指针指向的值一样，说明有重复的，
        //这个时候，左指针不动，右指针继续往右移。如果他俩
        //指向的值不一样就把右指针指向的值往前挪
        if (nums[left] != nums[right])
            nums[++left] = nums[right];
    return ++left;
};
// @lc code=end

