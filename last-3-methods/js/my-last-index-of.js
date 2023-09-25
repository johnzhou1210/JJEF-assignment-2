window.onload = () => {
    const lastIndexOfButton = document.querySelector("#invoke-my-last-index-of-function");

    function myLastIndexOf(elemToFind, startIndx) {
        let arr = document.querySelector("#my-last-index-of-arr").value.trim().split(",");
        if (isNaN(startIndx) || startIndx >= arr.length) { // second expression is optimization to ensure no checks will be wasted (e.g. when arr size is 10 but startIndx is 1000000)
            startIndx = arr.length - 1;  
        }
        for (let i = startIndx; i >= 0; i--) {
            if (arr[i] == elemToFind) {
                return i;
            } 
        }
        return -1;
    }

    /* Button click event */
    lastIndexOfButton.addEventListener("click", () => {
        let elemToFind = document.querySelector("#my-last-index-of-arg-1").value;
        let startIndx = parseInt(document.querySelector("#my-last-index-of-arg-2").value);
        document.querySelector("#my-last-index-of-result").textContent = myLastIndexOf(elemToFind, startIndx);
    });

};