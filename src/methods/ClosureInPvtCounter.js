const ClosureInPvtCounter = () => {
  var _counter = 0;
  return {
    add: (increment) => (_counter += increment),
    fetch: () => console.log(_counter),
  };
};

export default ClosureInPvtCounter;
