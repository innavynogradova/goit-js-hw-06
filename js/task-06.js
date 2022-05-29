const inputRef = document.querySelector("#validation-input");

function checkInputValid() {
    if (inputRef.value.length === 0) {
        inputRef.classList.remove("invalid");
        inputRef.classList.remove("valid");
    } else if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
}

inputRef.addEventListener('blur', checkInputValid);