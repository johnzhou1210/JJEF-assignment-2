// takes in array and target, iterates through array
// Example:
// const numArr = [1,2,3,4,5];
// myIncludes(numArr, 2); // true
// myIncludes(numArr, 10); // false

function myIncludes(arr, target) {
    for (const currentItem of arr) {
        if (currentItem === target) {
            return true;
        }
    }
    return false;
}

// takes in array and target, iterates through array by index i. 
// Compare to target, if it's there then return the index, else -1
// Example:
// const numArr = [1,2,3,4,5];
// myIndexOf(numArr, 3); // 2
// myIndexOf(numArr, 7); // -1

function myIndexOf(arr, target) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// takes in arr and element to append
// using length of arr, attaches to end of current arr
//const numArr = [1, 2, 3, 4, 5];
// myIndexOf(numArr, 7); // result is [1, 2, 3, 4, 5, 7]

function myPush(arr, elementToAdd) {
    arr[arr.length] = elementToAdd;
}