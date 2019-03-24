// finding the largest integer in array of integers
// example of O(N) asymptotical complexity algorithm

function find_largest(array) {
    let largest = array[0];

    for(let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    return largest;
}

console.log(find_largest([26, 346, 4, 0, 23, 56])); // 346