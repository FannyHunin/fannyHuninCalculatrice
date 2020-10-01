/* BUILD CALCULETTE
- une div "corps"
- un input "écran"
- une div pour les chiffres
- une row avec 4 col pour 1 2 3 +
- une row avec 4 col pour 4 5 6 - 
- une row avec 4 col pour 7 8 9 *
- une row avec 4 col pour c 0 = /
- BTN POUR CHAQUE CARACT
*/

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
/*let j = 0;
let btnCreation = (row) => {
    for (let i = 0; i < 4; i++) {
        row.appendChild(document.createElement("button"));
    }
    let btnTab = Array.from(document.querySelectorAll("button"));
    btnTab.forEach(element => {
        element.className = "button"
        element.innerText = btnTab.indexOf(element) + 1;
    });
}

//FAIRE BOUCLE QUI CREE 3 BOUTONS

//row1
let row1 = numPad.appendChild(document.createElement("div"));
row1.className = "row";
btnCreation(row1);

//row2
let row2 = numPad.appendChild(document.createElement("div"));
row2.className = "row";
btnCreation(row2);


//row3
let row3 = numPad.appendChild(document.createElement("div"));
row3.className = "row";
btnCreation(row3);


//row4
let row4 = numPad.appendChild(document.createElement("div"));
row4.className = "row";
btnCreation(row4);*/


let row1 = numPad.appendChild(document.createElement("div"));
row1.className = "row";
let btn1 = row1.appendChild(document.createElement("button"));
btn1.className = "button";
btn1.textContent = 1;
let btn2 = row1.appendChild(document.createElement("button"));
btn2.className = "button";
btn2.textContent = 2;
let btn3 = row1.appendChild(document.createElement("button"));
btn3.className = "button";
btn3.textContent = 3;
let btn4 = row1.appendChild(document.createElement("button"));
btn4.className = "opButton";
btn4.textContent = "+";
btn4.setAttribute("isPressed", "false")

//row2
let row2 = numPad.appendChild(document.createElement("div"));
row2.className = "row";
let btn5 = row2.appendChild(document.createElement("button"));
btn5.className = "button";
btn5.textContent = 4;
let btn6 = row2.appendChild(document.createElement("button"));
btn6.className = "button";
btn6.textContent = 5;
let btn7 = row2.appendChild(document.createElement("button"));
btn7.className = "button";
btn7.textContent = 6;
let btn8 = row2.appendChild(document.createElement("button"));
btn8.className = "opButton";
btn8.textContent = "-";

//row3
let row3 = numPad.appendChild(document.createElement("div"));
row3.className = "row";
let btn9 = row3.appendChild(document.createElement("button"));
btn9.className = "button";
btn9.textContent = 7;
let btn10 = row3.appendChild(document.createElement("button"));
btn10.className = "button";
btn10.textContent = 8;
let btn11 = row3.appendChild(document.createElement("button"));
btn11.className = "button";
btn11.textContent = 9;
let btn12 = row3.appendChild(document.createElement("button"));
btn12.className = "opButton";
btn12.textContent = "*";

//row4
let row4 = numPad.appendChild(document.createElement("div"));
row4.className = "row";
let btn13 = row4.appendChild(document.createElement("button"));
btn13.className = "specialButton";
btn13.textContent = "C";
let btn14 = row4.appendChild(document.createElement("button"));
btn14.className = "button";
btn14.textContent = 0;
let btn15 = row4.appendChild(document.createElement("button"));
btn15.className = "specialButton";
btn15.textContent = "=";
let btn16 = row4.appendChild(document.createElement("button"));
btn16.className = "opButton";
btn16.textContent = "/";

//bonusRow
let row5 = numPad.appendChild(document.createElement("div"));
row5.className = "bonusRow";