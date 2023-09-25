const grabKeysButton = document.querySelector("#invoke-grab-keys-function");

function grabKeys() {
  let arr = document.querySelector("#grab-keys-arg-1").value.trim().split(",");
  let result = [];
  for (const i in arr) {
    let currPair = arr[i];
    let key = currPair.substring(0, currPair.indexOf(":"));
    let val = currPair.substring(currPair.indexOf(":") + 1, currPair.length);
    result[i] = key; // alternatively you could use result.push(), but I am unsure if that is allowed for this assignment even if I am not the one doing that recreation
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
grabKeysButton.addEventListener("click", () => {
  let output = document.querySelector("#grab-keys-result");
  output.textContent = prettyFormat(grabKeys());
});
