let numberDisplay = "0";
let numberAccount = null;
let trueOperator = "";
let operatorActive = false;
const error = "Error";
const maxDigits = 11;

function getElement(id) {
    return document.getElementById(id);
}

const expression = getElement("expression");
const display = getElement("display");
const clear = getElement("clear");
const minus = getElement("minus");
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
const root = getElement("root");
const point = getElement("point");

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
minus.onclick = minusfunc;
root.onclick = rootfunc;
point.onclick = pointfunc;

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
    numberDisplay = "0";
    display.innerHTML = 0;
    expression.innerHTML = 0;
    numberAccount = null;
}

function buttonZero() {
    if (numberDisplay !== "0") {
        addNumber(0);
    } else {
        display.innerHTML = "0";
        if (!operatorActive) {
            expression.innerHTML = 0;
        }
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

function pointfunc() {
    if (display.innerHTML.includes(".")) {
        return;
    }
    addNumber(".");
}

function setOperator(operator) {
    trueOperator = operator;
    expression.innerHTML = `${
        numberAccount !== null ? numberAccount : numberDisplay
    } ${trueOperator}`;
    numberDisplay = "0";
    operatorActive = true;
}
//mult
function minusfunc() {
    if (display.innerHTML !== "0") {
        display.innerHTML = display.innerHTML.includes("-")
            ? display.innerHTML.slice("1")
            : "-" + display.innerHTML;

        numberDisplay = display.innerHTML;
        if (numberAccount !== null) {
            numberAccount = numberDisplay;
        }
    }
}

function rootfunc() {
    expression.innerHTML = `√(${display.innerHTML})`;
    display.innerHTML = Math.sqrt(display.innerHTML);
    if (display.innerHTML === "NaN") {
        display.innerHTML = error;
    } else {
        numberAccount = display.innerHTML;
        operatorActive = false;
    }
    numberDisplay = "0";
}

function addNumber(number) {
    display.classList.remove("error_div", "displayLarge");
    if (numberDisplay.length > 7) {
        display.classList.add("displayLarge");
    }
    if (numberDisplay.length < maxDigits) {
        numberDisplay =
            numberDisplay === "0" ? number.toString() : numberDisplay + number;
        display.innerHTML = numberDisplay;
    }
    numberAccount = null;
    if (!operatorActive) {
        expression.innerHTML = 0;
    }
}

let sumResult;
function result() {
    if (operatorActive) {
        const firstOperand = parseFloat(expression.innerHTML);
        if (numberDisplay === "0") {
            numberDisplay = display.innerHTML;
        }

        const secondOperand = parseFloat(numberDisplay);

        let error = false;

        switch (trueOperator) {
            case "+":
                sumResult = firstOperand + secondOperand;
                break;
            case "-":
                display.innerHTML = firstOperand - secondOperand;
                break;
            case "x":
                display.innerHTML = firstOperand * secondOperand;
                break;
            case "/":
                if (secondOperand !== 0) {
                    display.innerHTML = firstOperand / secondOperand;
                } else if (secondOperand === 0 && firstOperand === 0) {
                    display.innerHTML = "Result is undefined";
                    display.classList.add("error_div");
                    error = true;
                } else if (secondOperand === 0) {
                    display.innerHTML = "Cannot divide by zero";
                    display.classList.add("error_div");
                    error = true;
                }
                break;
        }
        const decimalPlaces = (sumResult.toString().split(".")[1] || []).length;

        // Arredonda o resultado para o número de casas decimais
        display.innerHTML = sumResult.toFixed(decimalPlaces);

        expression.innerHTML = `${firstOperand} ${trueOperator} ${secondOperand} =`;
        if (display.innerHTML.length > 7) {
            display.classList.add("displayLarge");
        }

        numberAccount = error ? 0 : display.innerHTML;
        operatorActive = false;
        numberDisplay = "0";
    }
}
