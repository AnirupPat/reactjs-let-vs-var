const setTimeoutVar = () => {
  for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 1000 * i);
  }
};

export default setTimeoutVar;
