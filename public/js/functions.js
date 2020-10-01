let value1;
let answer;

let btn4 = document.querySelectorAll("button")[3];
let btn8 = document.querySelectorAll("button")[7];
let btn12 = document.querySelectorAll("button")[11];
let btn16 = document.querySelectorAll("button")[15];

let btn15 = document.querySelectorAll("button")[14]

let bonusRow = document.querySelectorAll("row")[4]

let write = (e) => {
    calculatorScreen.value += e.target.innerText
    if (e.target.innerText == "C") {
        calculatorScreen.value = ""
    }
    if (e.target.innerText == "=") {
        calculatorScreen.value = calculatorScreen.value.slice(0, calculatorScreen.value.length - 1)
    }
}
let addition = () => {
    btn4.attributes.isPressed = "+"
    value1 = parseInt(calculatorScreen.value);
}
let soustr = () => {
    btn8.attributes.isPressed = "-"
    value1 = parseInt(calculatorScreen.value);
}
let times = () => {
    btn12.attributes.isPressed = "*"
    value1 = parseInt(calculatorScreen.value);
}
let divide = () => {
    btn16.attributes.isPressed = "/"
    value1 = parseInt(calculatorScreen.value);
}

numPad.addEventListener("click", write);

btn4.addEventListener("click", addition);
btn8.addEventListener("click", soustr);
btn12.addEventListener("click", times);
btn16.addEventListener("click", divide);

btn15.addEventListener("click", () => {
    if (btn4.attributes.isPressed == "+") {
        value1 += parseInt(calculatorScreen.value.substr(calculatorScreen.value.indexOf("+") + 1, 1))
        answer = parseInt(value1);
        calculatorScreen.value = answer
    } else if (btn8.attributes.isPressed == "-") {
        value1 -= parseInt(calculatorScreen.value.substr(calculatorScreen.value.indexOf("-") + 1, 1))
        answer = parseInt(value1);
        calculatorScreen.value = answer
    } else if (btn12.attributes.isPressed == "*") {
        value1 *= parseInt(calculatorScreen.value.substr(calculatorScreen.value.indexOf("*") + 1, 1))
        answer = parseInt(value1);
        console.log(answer);
        calculatorScreen.value = answer
    } else if (btn16.attributes.isPressed == "/") {
        value1 /= parseInt(calculatorScreen.value.substr(calculatorScreen.value.indexOf("/") + 1, 1))
        answer = parseInt(value1);
        console.log(answer);
        calculatorScreen.value = answer
    }
})