const ClosureWithVar = () => {
    var counter = 0;
    return (i) => {
        counter += i;
        console.log(counter);
    }
}

export default ClosureWithVar;