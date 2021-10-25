let button = document.getElementById("check")
let email = document.getElementById("e-mail")
let output = document.getElementById("test")

function checkEmail() {
    let result = email.value;
    let extension = ""
    extension = result.split(".")[1]
    if (extension.length==2 || extension.length==3) {
        output.innerText = `${result} is valid`
    } else {
        output.innerText = `${result} is invalid`
    }
}

button.addEventListener("click", checkEmail);