const ArrowFuncHoisting = () => {
    call(); // this will throw an error...
    const call = () => {
        console.log("function callled")
    }
}

export default ArrowFuncHoisting;