/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    //用map记录数据以及个数，然后比较map
    let arr = []
    let map = {}
    for (const i of nums1) {
        if (map[i]) {
            map[i]++
        } else {
            map[i] = 1
        }
    }
    for (const j of nums2) {
        if (map[j] > 0) {
            arr.push(j);
            map[j]--
        }
    }
    return arr
};
// @lc code=end

