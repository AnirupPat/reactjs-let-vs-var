const setTimeoutIIFEArrow = () => {
  for (var i = 0; i < 4; i++) {
    ((i) => {
      setTimeout(() => console.log(i), 1000 * i);
    })(i);
  }
};

export default setTimeoutIIFEArrow;
