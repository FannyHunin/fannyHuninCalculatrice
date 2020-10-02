let value1;
let op;

numPad.addEventListener("click", (e) => {
    calculatorScreen.value += e.target.innerText
    if (e.target.innerText == "c") {
        calculatorScreen.value = ""
    } else if (e.target.innerText == "+") {
        value1 = parseInt(calculatorScreen.value.slice(0, calculatorScreen.value.indexOf("+")));
        op = "+";
    } else if (e.target.innerText == "-") {
        value1 = parseInt(calculatorScreen.value.slice(0, calculatorScreen.value.indexOf("-")));
        op = "-";
    } else if (e.target.innerText == "*") {
        value1 = parseInt(calculatorScreen.value.slice(0, calculatorScreen.value.indexOf("*")));
        op = "*";
    } else if (e.target.innerText == "/") {
        value1 = parseInt(calculatorScreen.value.slice(0, calculatorScreen.value.indexOf("/")));
        op = "/";
    } else if (e.target.innerText == "=") {
        if (op == "+") {
            value1 += parseInt(calculatorScreen.value.slice(calculatorScreen.value.indexOf("+") + 1, calculatorScreen.value.length));
            calculatorScreen.value = value1
        } else if (op == "-") {
            value1 -= parseInt(calculatorScreen.value.slice(calculatorScreen.value.indexOf("-") + 1, calculatorScreen.value.length));
            calculatorScreen.value = value1
        } else if (op == "*") {
            value1 *= parseInt(calculatorScreen.value.slice(calculatorScreen.value.indexOf("*") + 1, calculatorScreen.value.length));
            calculatorScreen.value = value1
        } else if (op == "/") {
            value1 /= parseInt(calculatorScreen.value.slice(calculatorScreen.value.indexOf("/") + 1, calculatorScreen.value.length));
            calculatorScreen.value = value1
        }
    }
})