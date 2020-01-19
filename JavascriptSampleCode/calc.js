function myFunction(number1, number2) {
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    let total = 0;
    if (document.getElementById("add")) {
        total = number1 + number2;
        document.getElementById("total").innerText = total;
        console.log(document.getElementById("add"));
    }
}

function minus(number1, number2) {
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    let total = 0;
    if (document.getElementById("minus")) {
        total = number1 - number2;
        document.getElementById("total").innerText = total;
        console.log(document.getElementById("minus"));
    }
}

function multiply(number1, number2) {
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    let total = 0;
    if (document.getElementById("multiply")) {
        total = number1 * number2;
        document.getElementById("total").innerText = total;
        console.log(document.getElementById("multiply"));
    }
}

function divide(number1, number2) {
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    let total = 0;
    if (document.getElementById("divide")) {
        total = number1 / number2;
        document.getElementById("total").innerText = total;
        console.log(document.getElementById("divide"));
    }
}

