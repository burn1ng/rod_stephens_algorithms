// check array of integers for duplicated numbers existance
// example of O(N^2) asymptotical complexity algorithm
// it's not the most efficient way to determine duplicates in array

function is_contain_duplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] === array[j]) {
                    return true;
                }
            }
        }
    }

    return false;
}

console.log(is_contain_duplicates([0, 523, 848, 93, 22, 0, 23])); // true
console.log(is_contain_duplicates([5, 234, 65, 23, 14])); // false