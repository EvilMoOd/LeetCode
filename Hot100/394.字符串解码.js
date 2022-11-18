/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 有点类似逆波兰，用栈完成，遇到数字（多位数）字母则进行累计，遇到左括号则将目前multi值和已记录的字符串（数字前的字符前缀）添加栈中，右括号出栈，将括号内字符串进行倍乘并拼接字符串
  let str = ''; 
  let stack = [];
  let multi = 0;
  for (let c of s) {
    //遍历字符串
    if (c === '[') {
      //遇到左括号
      stack.push([multi, str]); //[左括号前的数字，左括号前处理得到的字符串]
      [multi, str] = [0, '']; //数字和字符串都置0置空
    } else if (c === ']') {
      //遇到右括号
      let [preNum, preStr] = stack.pop(); //弹出最后的数组
      str = preStr + str.repeat(preNum); //新的字符串 = 处理过的字符串 + 左右括号内需要重复的字母 * 重复次数
    } else if (!isNaN(c))
      //遇到数字,将字符转换为数字，可能有多位数的情况，转成数字要进位
      multi = multi * 10 + parseInt(c);
    else str += c; //遇到字母，加进res
  }
  return str;
};
// @lc code=end
