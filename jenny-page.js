
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