let value1;
let answer;
let btn4 = document.querySelectorAll("button")[3];
let btn15 = document.querySelectorAll("button")[14]

let write = (e) => {
    calculatorScreen.value += e.target.innerText
    if (e.target.innerText == "C") {
        calculatorScreen.value = ""
    }
    if(e.target.innerText == "="){
        calculatorScreen.value = calculatorScreen.value.slice(0, calculatorScreen.value.length-1)
    }
}
let addition = () => {
    btn4.attributes.isPressed = "+"
    value1 = parseInt(calculatorScreen.value);
}

numPad.addEventListener("click", write);
btn4.addEventListener("click", addition)
btn15.addEventListener("click", () => {
    if(btn4.attributes.isPressed == "+"){
        value1 += parseInt(calculatorScreen.value.substr(calculatorScreen.value.indexOf("+")+1, 1))
        answer = parseInt(value1);
        console.log(answer);
        calculatorScreen.value = answer
    }
})