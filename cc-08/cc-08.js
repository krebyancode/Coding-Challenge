let enteredNumber = document.getElementById("enterNumber");
let button = document.getElementById("checkNumber");
let output = document.getElementById("test");

function fizzBuzz() {
    let number = parseInt(enteredNumber.value);
    let result = ""

    for (let i=1; i<=number; i++) {
        if ((i%3 == 0) && (i%5 == 0)) {
            result += `${i} fizz buzz <br>`
        } else if (i%3 == 0) {
            result += `${i} fizz <br>`
        } else if (i%5 == 0) {
            result += `${i} buzz <br>`
        } 
    }
    output.innerHTML = result
}

button.addEventListener("click", fizzBuzz)