let id = document.getElementById("idNumber");
let check = document.getElementById("checkNumber");
let output = document.getElementById("test");

function idNumber() {
    let result = id.value
    let sumOdd = 0;
    let sumEven = 0;
    let tenthIndex = 0;
    let eleventhIndex = 0;

    if (result.length!=11 || result[0]==0) {
        output.innerText = `${result} is an invalid TR ID Number`
    }
    for (i=1;i<10;i+=2) {
        sumOdd += parseInt(result[i-1])
    }
    for (j=1;j<9;j+=2) {
        sumEven += parseInt(result[j])
    }
    
    tenthIndex = ((sumOdd)*7-sumEven)%10
    eleventhIndex = (sumEven+sumOdd+tenthIndex)%10

    if(tenthIndex==result[9] && eleventhIndex==result[10]) {
        output.innerText = `${result} is a valid TR ID Number`
    } else {
        output.innerText = `${result} is an invalid TR ID Number`
    }
}

check.addEventListener("click", idNumber);