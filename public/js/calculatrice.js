/* BUILD CALCULETTE
- une div "corps"
- un input "écran"
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