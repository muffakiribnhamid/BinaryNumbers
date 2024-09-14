function intBinary(int)  {
    let binary = []
    let quotient = int;

    while(quotient > 0)  {
        let remainder = quotient % 2;
        binary.unshift(remainder);
        quotient = Math.floor(quotient / 2)
    }
    return binary
}

console.log(intBinary(10)); // [1,0,1,0]