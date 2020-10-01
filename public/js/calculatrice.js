//body
let body = document.querySelector("body");
let calculatorBody = body.appendChild(document.createElement("div"));
calculatorBody.setAttribute("id", "calculatorBody");

//screen
let calculatorScreen = calculatorBody.appendChild(document.createElement("input"));
calculatorScreen.setAttribute("id", "calculatorScreen");

//numPad
let numPad = calculatorBody.appendChild(document.createElement("div"));
numPad.setAttribute("id", "numPad");

//btnCreation
let tabButton = [1,2,3,"+", 4,5,6, "-", 7,8,9, "*", "c", 0, "=", "/"];
tabButton.forEach(element => {
    let button = numPad.appendChild(document.createElement("button"));
    button.innerText = element;
    if(button.innerText == "+" || button.innerText == "-" || button.innerText == "*" ||button.innerText == "/"){
        button.className = "opButton"
    }else if(button.innerText == "c" || button.innerText == "="){
        button.className = "specialButton"
    }else{
        button.className = "button"
    }
});