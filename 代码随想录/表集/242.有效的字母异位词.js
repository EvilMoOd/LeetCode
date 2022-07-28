/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 实现方法：1。map。2、排序比较。3、replace剔除，返回t如果是否为空
    if (s === t) return true
    if (s.length != t.length) return false
    return [...s].sort().join("") === [...t].sort().join('')
};
// @lc code=end

