const cycleDetector = (obj) => {
  // 思路是递归遍历obj的每一项，将每一个对象（包括源对象）放入数组中，判断每一项是否在数组中判断是否有环
  const arr = [obj];

  const cycle = (o) => {
    for (let value of Object.values(o)) {
      if (typeof value === 'object' && value !== null) {
        if (arr.includes(value)) {
          return true;
        }
        arr.push(value);
        cycle(value);
      }
    }
  };
  cycle(obj);

  return false;
};
