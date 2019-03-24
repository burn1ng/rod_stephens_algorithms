// finding the geatest common divider of 2 given integers
function gcd(a, b) {
    while(b !== 0) {
        let reminder = a % b;

        a = b;
        b = reminder;
    }

    return a;
}

console.log(gcd(121, 44)); // 11