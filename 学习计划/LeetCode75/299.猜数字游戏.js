/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  // 公牛可以直接得出，奶牛则用双表来判断，取最小值
  let A = 0,
    B = 0;
  const mapS = new Map();
  const mapG = new Map();
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) A++;
    else {
      mapS.set(secret[i], mapS.get(secret[i]) ? mapS.get(secret[i]) + 1 : 1);
      mapG.set(guess[i], mapG.get(guess[i]) ? mapG.get(guess[i]) + 1 : 1);
    }
  }
  mapG.forEach((value, key) => {
    if (mapS.has(key)) B += Math.min(value, mapS.get(key));
  });
  return `${A}A${B}B`;
};
// @lc code=end
