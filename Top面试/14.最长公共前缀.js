/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    //取第一个字符串为公共前缀后逐个对比返回公共前缀
    return strs.reduce((prefix, cur) => {
        while (cur.indexOf(prefix) != 0) {
            prefix = prefix.slice(0, prefix.length - 1)
        }
        return prefix
    })

}
// @lc code=end

