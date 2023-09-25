const grabValuesButton = document.querySelector("#invoke-grab-values-function");

function grabValues() {
    let arr = document.querySelector("#grab-values-arg-1").value.trim().split(",");
    let result = [];
    for (const i in arr) {
      let currPair = arr[i];
      let key = currPair.substring(0, currPair.indexOf(":"));
      let val = currPair.substring(currPair.indexOf(":") + 1, currPair.length);
      result[i] = val; // alternatively you could use result.push(), but I am unsure if that is allowed for this assignment even if I am not the one doing that recreation
    }
    return result;
}

function prettyFormat(arr) {
    let result = "[";
    for (const i in arr) {
        result += arr[i] + (i != arr.length - 1 ? ", " : "]");
    }
    return result;
}

/* Button click event */
grabValuesButton.addEventListener("click", () => {
    let output = document.querySelector("#grab-values-result");
    output.textContent = prettyFormat(grabValues());
});