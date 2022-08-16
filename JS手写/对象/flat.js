const flatten = (obj) => {
  if (!isObject(obj)) return;
  const res = {};
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        for (let i in cur) {
          dfs(cur[i], `${prefix}[${i}]`);
        }
      } else {
        for (let i in cur) {
          dfs(cur[i], `${prefix}${prefix ? '.' : ''}${i}`);
        }
      }
    } else {
      res[prefix] = cur;
    }
  };
  dfs(obj, '');

  return res;
};
