const grabKeysButton = document.querySelector("#invoke-grab-keys-function");

/* Button click event */
grabKeysButton.addEventListener("click", () => {
    let arr = document.querySelector("#grab-keys-arg-1").value.trim().split(",");
    let result = "[";

    for (const i in arr) {
        let currPair = arr[i]; 
        let key = currPair.substring(0, currPair.indexOf(":"));
        let val = currPair.substring(currPair.indexOf(":") + 1, currPair.length);
        result += key + (i != arr.length - 1 ? ", " : "");
    }

    result += "]";
    let output = document.querySelector("#grab-keys-result");
    output.textContent = result;
});