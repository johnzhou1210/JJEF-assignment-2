/* myEach */
function myEach(arr, callback){
    for(let i=0; i< arr.length;i++){
        callback(arr[i],i);
    }
}

function runMyEach(){
    let inputArrayText = document.getElementById('inputArray').value;
    let newArr = [];
    newArr = JSON.parse(inputArrayText);
    myEach(newArr, resultMyEach);
}

function resultMyEach(value, index){
    document.getElementById('resultArray').textContent += "Value in index "+index+" is "+value+"\n";
}


/* myMap */

function myMap(arr, callback){
    let newArr = [];
    for(let i=0; i<arr.length;i++){
        newArr[i] = callback(arr[i]);
    }
    document.getElementById('resultArray2').textContent = "Array "+"["+newArr+"]";
}

function runMyMap(){
    let inputArrayText = document.getElementById('inputArray2').value;
    let newArr = [];
    newArr = JSON.parse(inputArrayText);
    myMap(newArr, resultMyMap);
}

function resultMyMap(value){
    return value*2;
}


/* myFilter */

function myFilter(arr, callback){
    let newArr = [];
    let j = 0;
    for(let i=0; i<arr.length;i++){
        filter = callback(arr[i]);
        if(filter === 1){
            newArr[j] = arr[i];
            j++;
        }
    }
    document.getElementById('resultArray3').textContent = "Array "+"["+newArr+"]";
}

function runMyFilter(){
    let inputArrayText = document.getElementById('inputArray3').value;
    let newArr = [];
    newArr = JSON.parse(inputArrayText);
    myFilter(newArr, resultMyFilter);
}

function resultMyFilter(value){
    if(value < 10){
        return 1;
    }
    else{
        return 0;
    }
}
