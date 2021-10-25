function perfectNumber() {
    let num = parseInt(prompt("enter a number: "))
    let sum = 1;
    for (i=2;i<=num/2;i++) {
        if(num%i==0) {
            sum += i;
        }
    }
    if (num==sum && num>1) {
        return `It is a perfect number`
    } else {
        return `It is not a perfect number`
    }
}

console.log(perfectNumber());