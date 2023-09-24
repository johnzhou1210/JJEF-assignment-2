window.onload = () => {
    const lastIndexOfButton = document.querySelector("#invoke-my-last-index-of-function");

    /* Button click event */
    lastIndexOfButton.addEventListener("click", () => {
        let arr = document.querySelector("#my-last-index-of-arr").value.trim().split(",");
        let elemToFind = document.querySelector("#my-last-index-of-arg-1").value;
        let startIndx = parseInt(document.querySelector("#my-last-index-of-arg-2").value);

        console.log("elemToFind is " + elemToFind);
        
        console.log(arr.length);

        if (isNaN(startIndx)) {
            startIndx = arr.length - 1;  
        }

        console.log("startIndx is " + startIndx);

        for (let i = startIndx; i >= 0; i--) {
            console.log("in here " + arr[i]);
            if (arr[i] == elemToFind) {
                document.querySelector("#my-last-index-of-result").textContent = i;
                return;
            } 
        }
        document.querySelector("#my-last-index-of-result").textContent = -1;
    });


    


};