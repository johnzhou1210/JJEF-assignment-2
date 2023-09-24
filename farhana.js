function myEach(arr, callback){
    for(let i=0; i< arr.length;i++){
        callback(arr[i]);
    }
}

function myMap(arr, callback){
    let newArr = [];
    for(let i=0; i<arr.length;i++){
        newArr[i] = callback(arr[i]);
    }
}

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
}