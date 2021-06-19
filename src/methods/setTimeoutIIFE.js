const setTimeoutIIFE = () => {
    for(var i = 0; i < 4; i++) {
        (function () {
            var j = i;
            setTimeout(() => console.log(j), 1000*j);
        }());
    }
}

export default setTimeoutIIFE;