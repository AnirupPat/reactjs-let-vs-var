const Debouncing = (fn, delay) => {
  let timer = null;
  return (function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  })();
};

export default Debouncing;
