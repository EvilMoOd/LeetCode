const format = (s) => {
  // 无小数
  if (!s.toString().includes('.'))
    return s.toString().replace(/(?!^)(?=(\d{3})+$)/g, ',');
  // 有小数
  const arr = s.toString().split('.');
  // 整数部分
  arr[0] = arr[0].replace(/(?!^)(?=(\d{3})+$)/g, ',');
  // 小数部分
  let ceil = arr[1].split('');
  for (let i = 2; i < ceil.length; i += 3) {
    ceil.splice(i, 1, `${ceil[i]},`);
  }
  arr[1] = ceil.join('');
  return arr.join('.');
};

