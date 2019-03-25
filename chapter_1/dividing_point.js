// finding average value from array of numbers (one of steps in quick sort algorithm)
// example of O(1) asymptotic complexity

function dividing_point(array) {
    let num1 = array[0],
        num2 = array[array.length - 1],
        num3 = array[Math.floor((array.length - 1) / 2)];

    if (num1 > num2 && num1 < num3) return num1;
    if (num2 > num1 && num2 < num3) return num2;

    return num3;
}

let test_array_1 = [];
let test_array_2 = [];

for(let i = 1; i <= 100; i++) {
    test_array_1.push(i);
}

for(let j = 1; j <= 201; j++) {
    test_array_2.push(j);
}

console.log(dividing_point(test_array_1)); // 50
console.log(dividing_point(test_array_2)); // 101