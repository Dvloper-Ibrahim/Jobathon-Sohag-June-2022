// Wrapping inputs in variables
const userName = document.getElementById("user_name").value;
const password = document.getElementById("password").value;
const button = document.getElementById("submit");

button.addEventListener("click", (userName, password) => {
    if(userName && password) {
        window.alert("G0!");
    }
});
