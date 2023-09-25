
// input div
let inputIncludesArray = document.body.querySelector("#includes-array");
let inputIncludesArrayDisplay = document.body.querySelector("#includes-array-display");
let inputIncludesArrayCheck = document.body.querySelector("#includes-array-check");

// argument div
let inputIncludesTarget = document.body.querySelector("#includes-target");

// result div
let inputIncludesResultText = document.body.querySelector("#includes-result-text");

// button
let inputIncludesButton = document.body.querySelector("#includes-button");

// myIncludes result example
let myIncludesExample = document.body.querySelector("#myIncludes-example");

let inputIncludesContent = null;
let inputIncludesTargetElement = null;

inputIncludesArray.addEventListener("input", () => {
    inputIncludesContent = inputIncludesArray.value;
});

inputIncludesArrayCheck.addEventListener("click", () => {
    inputIncludesArrayDisplay.value = displayArray();
});

inputIncludesTarget.addEventListener("input", () => {
    inputIncludesTargetElement = inputIncludesTarget.value;
});

inputIncludesButton.addEventListener("click", () => {
    if (inputIncludesContent !== null && inputIncludesTargetElement !== null) {
        inputIncludesResultText.value = myIncludes(createArray(), inputIncludesTargetElement); 
    }
});

myIncludesExample.value = myIncludes([1,2,3,"word"], 2);

// displays the possible result of individual elements provided by the user as a string
function displayArray() {
    let displayResult = "Is this what you expected: ";

    if (inputIncludesContent !== null) {
        let line = "[";
        for (let i=0; i<inputIncludesContent.length; i++) {
            if (inputIncludesContent[i] !== " ") {
                line += inputIncludesContent[i];
            } else {
                line += ", ";
            }
            if (i === inputIncludesContent.length - 1 && inputIncludesContent[i] !== " ") { // for last word
                line += "]";
            }
        }
        displayResult += line;
    }

    //console.log(displayResult);
    return displayResult;
}

// creates array from individual elements provided by the user
function createArray() {
    let createdIncludesArray = [];

    if (inputIncludesContent != null) {
        let word = "";
        for (let i=0; i<inputIncludesContent.length; i++) {
            if (inputIncludesContent[i] !== " ") {
                word += inputIncludesContent[i];
            } else {
                createdIncludesArray.push(word);
                word = "";
            }
            if (i === inputIncludesContent.length - 1 && inputIncludesContent[i] !== " ") { // for last word
                createdIncludesArray.push(word);
                word = "";
            }
        }
    }

    //console.log(createdIncludesArray);
    return createdIncludesArray;
}


// THE THREE FUNCTIONS BELOW 

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
// const numArr = [1, 2, 3, 4, 5];
// myIndexOf(numArr, 7); // Result: [1, 2, 3, 4, 5, 7]

function myPush(arr, elementToAdd) {
    arr[arr.length] = elementToAdd;
}