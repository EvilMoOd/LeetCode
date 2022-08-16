const cycleDetector = (obj) => {
  const arr = [obj];
  let flag = false;

  const cycle = (o) => {
    const values = Object.values(o);
    for (let value of values) {
      if (typeof value === 'object' && value !== null) {
        if (arr.includes(value)) {
          flag = true;
          return;
        }
        arr.push(value);
        cycle(value);
      }
    }
  };

  cycle(obj);

  return flag;
};
