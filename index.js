let numberDisplay = "";
let numberAccount = null;
let trueOperator = "";
let operatorActive = false;

function getElement(id) {
    return document.getElementById(id);
}

const expression = getElement("expression");
const display = getElement("display");
const clear = getElement("clear");
const zero = getElement("zero");
const one = getElement("one");
const two = getElement("two");
const three = getElement("three");
const four = getElement("four");
const five = getElement("five");
const six = getElement("six");
const seven = getElement("seven");
const eight = getElement("eight");
const nine = getElement("nine");
const plus = getElement("plus");
const less = getElement("less");
const mult = getElement("mult");
const div = getElement("div");
const equal = getElement("result");

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
plus.onclick = function () {
    setOperator("+");
};
less.onclick = function () {
    setOperator("-");
};
mult.onclick = function () {
    setOperator("x");
};
div.onclick = function () {
    setOperator("/");
};
//functions button

function buttonClear() {
    numberDisplay = "";
    display.innerHTML = "0";
    expression.innerHTML = "0";
    numberAccount = null;
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

function setOperator(operator) {
    const operators = ["+", "-", "x", "/"];

    if (operators.includes(operator)) {
        trueOperator = operator;
        expression.innerHTML = `${
            numberAccount === null ? numberAccount : numberDisplay
        } ${trueOperator}`;
        numberDisplay = "";
        operatorActive = true;
    }
}

function addNumber(number) {
    numberDisplay += number;
    display.innerHTML = numberDisplay;
}

function result() {
    if (operatorActive) {
        const firstOperand = parseFloat(expression.innerHTML);
        const secondOperand = parseFloat(numberDisplay);

        switch (trueOperator) {
            case "+":
                display.innerHTML = firstOperand + secondOperand;
                break;
            case "-":
                display.innerHTML = firstOperand - secondOperand;
                break;
            case "x":
                display.innerHTML = firstOperand * secondOperand;
                break;
            case "/":
                display.innerHTML =
                    secondOperand !== 0
                        ? firstOperand / secondOperand
                        : "Error";
                break;
        }

        expression.innerHTML = `${firstOperand} ${trueOperator} ${secondOperand} =`;
        numberAccount = display.innerHTML;
        operatorActive = false;
        numberDisplay = "";
    }
}
