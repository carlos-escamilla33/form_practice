let form = document.getElementById("form-container");

const checkPassMatch = (pass1, pass2) => {
    let password1 = pass1.value;
    let password2 = pass2.value;
    let result = false;

    if (password1.length == password2.length && password1 == password2) {
        result = true;
    }

    return result;
};



form.addEventListener("submit", () => {
    event.preventDefault();
    console.log("form submitted");

    let enteredPass = document.querySelector(".pass1");
    let confirmedPass = document.querySelector(".pass2");
    let passResult = checkPassMatch(enteredPass, confirmedPass);

    if (!passResult) {
        enteredPass.classList.add("error");
        confirmedPass.classList.add("error");
    } else {
        enteredPass.classList.add("success");
        confirmedPass.classList.add("success");
    }
});