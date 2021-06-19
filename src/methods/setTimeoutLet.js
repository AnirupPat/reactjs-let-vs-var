const setTimeoutLet = () => {
    for(let i = 0; i < 4; i++) {
        setTimeout(() => console.log(i), 1000*i);
    }
}

export default setTimeoutLet;