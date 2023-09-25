const grabValuesButton = document.querySelector("#invoke-grab-values-function");

/* Button click event */
grabValuesButton.addEventListener("click", () => {
    let arr = document.querySelector("#grab-values-arg-1").value.trim().split(",");
    let result = "[";

    for (const i in arr) {
        let currPair = arr[i]; 
        let key = currPair.substring(0, currPair.indexOf(":"));
        let val = currPair.substring(currPair.indexOf(":") + 1, currPair.length);
        result += val + (i != arr.length - 1 ? ", " : "");
    }

    result += "]";
    let output = document.querySelector("#grab-values-result");
    output.textContent = result;
});