Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) { //Iterate through the array
        if (callback(this[i], i, this)) { //Checks if the callback function returns true
            return true;
        }
    }
    return false; //If none true then return false
};

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) { //Iterate through the array
        if (!callback(this[i], i, this)) { //Checks if the callback function returns false
            return false;
        }
    }
    return true; //If none false then return true
};

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue; //Accumulator holds the result
    for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {//Iterate through the array
        accumulator = callback(accumulator, this[i], i, this); //Adds to the accumulator
    }
    return accumulator; //Returns the accumulated total
};


//Test functions below
function testSome() {
    let inputArrayText = document.getElementById('arrayInput').value;
    let inputArray = [];
    inputArray = JSON.parse(inputArrayText);

    const ans = inputArray.mySome((number) => number % 2 === 0);

    const resultElement = document.getElementById("resultSome1");
    if (ans) {
        resultElement.textContent = "mySome() result: The array has at least one even number.";
    } else {
        resultElement.textContent = "mySome() result: The array does not have any even numbers.";
    }
};

function testSome2() {
    let inputArrayText = document.getElementById('arrayInput2').value;
    let inputArray = [];
    inputArray = JSON.parse(inputArrayText);

    const ans = inputArray.mySome((number) => number % 3 === 0);

    const resultElement = document.getElementById("resultSome2");
    if (ans) {
        resultElement.textContent = "mySome() result: True";
    } else {
        resultElement.textContent = "mySome() result: False";
    }
};

function testEvery() {
    let inputArrayText = document.getElementById('arrayInput3').value;
    let inputArray = [];
    inputArray = JSON.parse(inputArrayText);

    const ans = inputArray.myEvery((currentValue) => currentValue < 40);

    const resultElement = document.getElementById("resultEvery1");
    if (ans) {
        resultElement.textContent = "myEvery() result: True";
    } else {
        resultElement.textContent = "myEvery() result: False";
    }
};

function testEvery2() {
    let inputArrayText = document.getElementById('arrayInput4').value;
    let inputArray = [];
    inputArray = JSON.parse(inputArrayText);

    const ans = inputArray.myEvery((currentValue) => currentValue > 80);

    const resultElement = document.getElementById("resultEvery2");
    if (ans) {
        resultElement.textContent = "myEvery() result: True";
    } else {
        resultElement.textContent = "myEvery() result: False";
    }
};

function testReduce() {
    let inputArrayText = document.getElementById('arrayInput5').value;
    let inputArray = [];
    inputArray = JSON.parse(inputArrayText);

    const sum = inputArray.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const resultElement = document.getElementById("resultReduce1");
    resultElement.textContent = "myReduce() result:" + sum;
};

function testReduce2() {
    let inputArrayText = document.getElementById('arrayInput6').value;
    let inputArray = [];
    inputArray = JSON.parse(inputArrayText);

    let numberInput6 = document.getElementById('numberInput6');
    let initialValue6 = parseFloat(numberInput6.value);


    const sum = inputArray.myReduce((accumulator, currentValue) => accumulator + currentValue, initialValue6);

    const resultElement = document.getElementById("resultReduce2");
    resultElement.textContent = "myReduce() result:" + sum;
};