let firstNumber = document.getElementById("first-number")
let secondNumber = document.getElementById("second-number")
let operator = document.getElementById("operand")
let button = document.getElementById("calculate")
let output = document.getElementById("test")

function simpleCalculator() {
    let result = 0;

    switch(operator.value) {
        case "+":
            result = parseInt(firstNumber.value) + parseInt(secondNumber.value)
            break;
        case "-":
            result = parseInt(firstNumber.value) - parseInt(secondNumber.value)
            break;
        case "*":
            result = parseInt(firstNumber.value) * parseInt(secondNumber.value)
            break;
        case "/":
            result = parseInt(firstNumber.value) / parseInt(secondNumber.value)
            break;
        default:
            result = `wrong input entered. try again.`
        
    }

    output.innerHTML = `${firstNumber.value} ${operator.value} ${secondNumber.value} = ${result}`
}

button.addEventListener("click", simpleCalculator)