
// myIncludes()

// input div
let inputIncludesArray = document.body.querySelector("#includes-array");
let inputIncludesArrayDisplay = document.body.querySelector("#includes-array-display");
let inputIncludesArrayCheck = document.body.querySelector("#includes-array-check");

// argument div
let inputIncludesTarget = document.body.querySelector("#includes-target");

// result div
let inputIncludesResultText = document.body.querySelector("#includes-result-text");

// user button 
let inputIncludesButton = document.body.querySelector("#includes-button");

// myIncludes example result
let myIncludesExample = document.body.querySelector("#myIncludes-example");
let myIncludesExampleButton = document.body.querySelector("#includes-button-example");

let inputIncludesContent = null;
let inputIncludesTargetElement = null;

inputIncludesArray.addEventListener("input", () => {
    inputIncludesContent = inputIncludesArray.value;
});

inputIncludesArrayCheck.addEventListener("click", () => {
    inputIncludesArrayDisplay.value = displayArray(inputIncludesContent);
});

inputIncludesTarget.addEventListener("input", () => {
    inputIncludesTargetElement = inputIncludesTarget.value;
});

inputIncludesButton.addEventListener("click", () => {
    if (inputIncludesContent !== null && inputIncludesTargetElement !== null) {
        inputIncludesResultText.value = myIncludes(createArray(inputIncludesContent), inputIncludesTargetElement); 
    }
});

myIncludesExampleButton.addEventListener("click", ()=> {
    myIncludesExample.value = myIncludes([1,2,3,"word"], 2);
});


// myIndexOF()

// input div
let inputIndexOfArray = document.body.querySelector("#indexOf-array");
let inputIndexOfArrayDisplay = document.body.querySelector("#indexOf-array-display");
let inputIndexOfArrayCheck = document.body.querySelector("#indexOf-array-check");

// argument div
let inputIndexOfTarget = document.body.querySelector("#indexOf-target");

// result div
let inputIndexOfResultText = document.body.querySelector("#indexOf-result-text");

// user button 
let inputIndexOfButton = document.body.querySelector("#indexOf-button");

// myIndexOf example result
let myIndexOfExample = document.body.querySelector("#myIndexOf-example");
let myIndexOfExampleButton = document.body.querySelector("#indexOf-button-example");

let inputIndexOfContent = null;
let inputIndexOfTargetElement = null;

inputIndexOfArray.addEventListener("input", () => {
    inputIndexOfContent = inputIndexOfArray.value;
});

inputIndexOfArrayCheck.addEventListener("click", () => {
    inputIndexOfArrayDisplay.value = displayArray(inputIndexOfContent);
});

inputIndexOfTarget.addEventListener("input", () => {
    inputIndexOfTargetElement = inputIndexOfTarget.value;
});

inputIndexOfButton.addEventListener("click", () => {
    if (inputIndexOfContent !== null && inputIndexOfTargetElement !== null) {
        inputIndexOfResultText.value = myIndexOf(createArray(inputIndexOfContent), inputIndexOfTargetElement); 
    }
});

myIndexOfExampleButton.addEventListener("click", ()=> {
    myIndexOfExample.value = myIndexOf([1,2,3,"word"], 2);
});

// displays the possible result of individual elements provided by the user as a string
function displayArray(inputContent) {
    let displayResult = "[]";

    if (inputContent !== null) {
        let line = "[";
        for (let i=0; i<inputContent.length; i++) {
            if (inputContent[i] !== " ") {
                line += inputContent[i];
            } else {
                line += ", ";
            }
            if (i === inputContent.length - 1 && inputContent[i] !== " ") { // for last word
                line += "]";
            }
        }
        displayResult = line;
    }

    console.log(displayResult);
    return displayResult;
}

// creates array from individual elements provided by the user
function createArray(inputContent) {
    let createdArray = [];

    if (inputContent != null) {
        let word = "";
        for (let i=0; i<inputContent.length; i++) {
            if (inputContent[i] !== " ") {
                word += inputContent[i];
            } else {
                myPush(createdArray, word);
                word = "";
            }
            if (i === inputContent.length - 1 && inputContent[i] !== " ") { // for last word
                myPush(createdArray, word);
                word = "";
            }
        }
    }

    return createdArray;
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