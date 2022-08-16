// setTimeout实现setInterval
const mySetInterval = (fn, delay) => {
  let timer = null;
  const interval = () => {
    fn();
    timer = setTimeout(interval, delay);
  };
  timer = setTimeout(interval, delay);

  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
};
// setInterval实现setTimeout
const mySetTimeout = (fn, delay) => {
  const timer = setInterval(() => {
    fn();
    clearInterval(timer);
  }, delay);
};
