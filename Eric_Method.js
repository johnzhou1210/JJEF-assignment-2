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