var numberDisplay = "";
var expressionAccount;

const expression = document.getElementById("expression");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const plus = document.getElementById("plus");
const equal = document.getElementById("result");

//inicialize buttons
clear.onclick = buttonClear;
zero.onclick = buttonZero;
one.onclick = buttonOne;
two.onclick = buttonTwo;
three.onclick = buttonThree;
four.onclick = buttonFour;
five.onclick = buttonFive;
six.onclick = buttonSix;
seven.onclick = buttonSeven;
eight.onclick = buttonEight;
nine.onclick = buttonNine;
equal.onclick = result;
plus.onclick = plusfunc;
//functions button

function result() {
    expression.innerHTML = "= " + numberDisplay;
}
function buttonClear() {
    numberDisplay = "";
    display.innerHTML = "0";
    expression.innerHTML = "0";
}

function buttonZero() {
    if (display.innerHTML != 0) {
        numberDisplay += "0";
        display.innerHTML = numberDisplay;
    }
}
function buttonOne() {
    addNumber(1);
}

function buttonTwo() {
    addNumber(2);
}
function buttonThree() {
    addNumber(3);
}
function buttonFour() {
    addNumber(4);
}
function buttonFive() {
    addNumber(5);
}
function buttonSix() {
    addNumber(6);
}
function buttonSeven() {
    addNumber(7);
}
function buttonEight() {
    addNumber(8);
}
function buttonNine() {
    addNumber(9);
}

function plusfunc() {
    expression.innerHTML = "+ " + numberDisplay;
    console.log(numberDisplay);
    storeNextNumber()
}

function addNumber(number) {
    numberDisplay += number.toString();
    display.innerHTML = numberDisplay;
}

function storeNextNumber (){
    
}