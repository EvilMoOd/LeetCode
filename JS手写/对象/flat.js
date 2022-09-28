const flatten = (obj) => {
  if (typeof obj !== 'object' && obj === null) return;
  const res = {};
  const flat = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flat(obj[key])
      } else {
        res[key] = obj[key];
      }
    })
  }
  flat(obj)
  return res;
};
