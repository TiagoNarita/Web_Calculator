var numberDisplay = 0;

const zero = document.getElementById("zero");
const display = document.getElementById("display");
const one = document.getElementById("one");

//inicialize buttons
zero.onclick = buttonZero;
one.onclick = buttonOne;

function buttonOne() {
    numberDisplay = 1;
    display.innerText = numberDisplay;
}

function buttonZero() { 
    console.log(display.innerHTML );
    
    if(display.innerHTML != 0)
    numberDisplay += "0";
    console.log(numberDisplay);
    display.innerText = numberDisplay;
}
