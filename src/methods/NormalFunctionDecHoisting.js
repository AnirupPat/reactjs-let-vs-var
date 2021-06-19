const NormalFunctionDecHoisting = () => {
    call();
    function call() {
        console.log('function called.')
    }
}

export default NormalFunctionDecHoisting;