/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map();
    for (let item of s) {
        if (map.get(item) == undefined) {
            map.set(item, false)
        } else {
            map.set(item, true)
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) == false) {
            return i
        }
    }
    return -1
};
// @lc code=end

