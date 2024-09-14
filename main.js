//integer to binary
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


//binary to integer

function binaryInt(arr) { 
    let decimal = 0

    for(let i = 0; i < arr.length; i++) { 
        let bit = arr[i]
        let power = arr.length - i - 1;
        decimal += bit * Math.pow(2,power);
    }
    return decimal;
}

console.log(binaryInt([1, 1, 0, 1]));