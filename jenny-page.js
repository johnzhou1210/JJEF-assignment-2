
//     myIncludes() Without using the native “Array.prototype.includes” 
//     method of JavaScript, compose a function titled “myIncludes” 
//     that will take in an array of elements and indicate whether or not 
//     a target element is contained within the input array. 
//     This returns a boolean.

// takes in array of elements and target element that the user is looking for.
// Iterates through the array
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


//     myIndexOf() Without using the native “Array.prototype.indexOf” method of JavaScript, 
//     compose a function titled “myIndexOf” that will take in an array of elements 
//     and returns the index of the first encounter of a target element (if it is found) 
//     or -1 if that element does not exist within the input array.

// takes in array and target
// iterates through array using index i. 
// Compare to target, if it is there then return the index else -1
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

//const numArr = [1, 2, 3, 4];