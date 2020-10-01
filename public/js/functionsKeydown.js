let btn4 = document.querySelectorAll("button")[3];
let value1;
let answer;

let isFocused = () => {
    calculatorScreen.focus()
}

let addition = (e) => {
    if (e.key == "+") {
        btn4.attributes.isPressed = "+"
        value1 = parseInt(calculatorScreen.value);
    }
}
let soustr = (e) => {
    if (e.key == "-") {
        btn4.attributes.isPressed = "-"
        value1 = parseInt(calculatorScreen.value);
    }
}
let times = (e) => {
    if (e.key == "*") {
        btn4.attributes.isPressed = "*"
        value1 = parseInt(calculatorScreen.value);
    }
}
let divide = (e) => {
    if (e.key == "/") {
        btn4.attributes.isPressed = "/"
        value1 = parseInt(calculatorScreen.value);
    }
}

document.addEventListener("keydown", addition);
document.addEventListener("keydown", soustr);
document.addEventListener("keydown", times);
document.addEventListener("keydown", divide);

document.addEventListener("click", isFocused)
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        if (btn4.attributes.isPressed == "+") {
            value1 += parseInt(calculatorScreen.value.substr(calculatorScreen.value.indexOf("+") + 1, 1))
            answer = parseInt(value1);
            calculatorScreen.value = answer
        } else if (btn4.attributes.isPressed == "-") {
            value1 -= parseInt(calculatorScreen.value.substr(calculatorScreen.value.indexOf("-") + 1, 1))
            answer = parseInt(value1);
            calculatorScreen.value = answer
        } else if (btn4.attributes.isPressed == "*") {
            value1 *= parseInt(calculatorScreen.value.substr(calculatorScreen.value.indexOf("*") + 1, 1))
            answer = parseInt(value1);
            calculatorScreen.value = answer
        } else if (btn4.attributes.isPressed == "/") {
            value1 /= parseInt(calculatorScreen.value.substr(calculatorScreen.value.indexOf("/") + 1, 1))
            answer = parseInt(value1);
            calculatorScreen.value = answer
        }
    }
    /*if(e.key == "c"){
        calculatorScreen.value = "" 
    }*/
})