let output = document.querySelector("#numbers")

function lotteryGame() {
    generateNumber = () => Math.floor(Math.random()*49)+1
    let number = generateNumber();
    let arr = []

    while(true) {
        if(!arr.includes(number)) {
            arr.push(number)
        }
        if(arr.length==6) {
            break;
        }
        number = generateNumber();
    }
    
    arr.sort((a,b) => a-b);
    
    output.innerHTML = `Lucky numbers are: { ${arr} }`;
}

window.addEventListener("load", lotteryGame())