// 方法1
const shuffle = (arr) => {
  return arr.sort(() => Math.random() > 0.5 ? 1 : -1);
};

// 方法2
const shuffle2 = (arr) => {
  let i = arr.length;
  while (i) {
    let j = (Math.floor(Math.random() * i--)[(arr[j], arr[i])] = [
      arr[i],
      arr[j],
    ]);
  }
};
