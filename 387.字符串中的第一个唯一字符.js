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
    //map
    let map = new Map();
    //记录不重复的字符
    for (let item of s) {
        if (map.get(item) == undefined) {
            map.set(item, false)
        } else {
            map.set(item, true)
        }
    }
    //遍历字符并查找该字符是否重复，返回第一个非重复的，若无则返回-1
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) == false) {
            return i
        }
    }
    return -1
};
// @lc code=end

