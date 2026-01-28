const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

function operate(num1, operator, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

const displayBox = document.querySelector("#display-box");
const errorBox = document.querySelector("#error-box");
const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");
const sevenButton = document.querySelector("#seven-button");
const eightButton = document.querySelector("#eight-button");
const nineButton = document.querySelector("#nine-button");
const divisionButton = document.querySelector("#division-button");
const fourButton = document.querySelector("#four-button");
const fiveButton = document.querySelector("#five-button");
const sixButton = document.querySelector("#six-button");
const multiplicationButton = document.querySelector("#multiplication-button");
const oneButton = document.querySelector("#one-button");
const twoButton = document.querySelector("#two-button");
const threeButton = document.querySelector("#three-button");
const additionButton = document.querySelector("#addition-button");
const zeroButton = document.querySelector("#zero-button");
const decimalButton = document.querySelector("#decimal-button");
const equalityButton = document.querySelector("#equality-button");
const subtractionButton = document.querySelector("#subtraction-button");

clearButton.addEventListener("click", (event) => {
    displayBox.textContent = "";
})

deleteButton.addEventListener("click", (event) => {
    displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
})

sevenButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "7";
    }
});

eightButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "8";
    }
});

nineButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "9";
    }
});

divisionButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " ") {
        return;
    } else {
        displayBox.textContent += " / ";
    }
})

fourButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "4";
    }
});

fiveButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "5";
    }
});

sixButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "6";
    }
});

multiplicationButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " ") {
        return;
    } else {
        displayBox.textContent += " * ";
    }
})

oneButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "1";
    }
});

twoButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "2";
    }
});

threeButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "3";
    }
});

additionButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " ") {
        return;
    } else {
        displayBox.textContent += " + ";
    }
});

zeroButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "0";
    }
});

decimalButton.addEventListener("click", (event) => {  
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === "." || displayBox.textContent.slice(-1) === " ") {
        return;
    } else {
        displayBox.textContent += ".";
    }
});

equalityButton.addEventListener("click", (event) => {
    if (displayBox.textContent.includes(" ") === true) {
        let equation = displayBox.textContent.split(" ", 3);
        let num1 = parseInt(equation[0]);
        let num2 = parseInt(equation[2]);
        displayBox.textContent = operate(num1, equation[1], num2);
    } else {
        return;
    }
});

subtractionButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " ") {
        return;
    } else {
        displayBox.textContent += " - ";
    }
});

// if display is one number do nothing
// if display is one number and one operator do nothing
// if display is multiple numbers and operators are between numbers, operate the numbers
// if display is multiple numbers and ends in operator, ignore the last operator