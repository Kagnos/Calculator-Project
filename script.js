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

function solveEquation() {
    equation = displayBox.textContent.split(" ", 3);
    const num1 = parseInt(equation[0]);
    const num2 = parseInt(equation[2]);
    const solution = operate(num1, equation[1], num2);
    if (solution.toString().includes(".") === true){
        const solutionArray = solution.toString().split(".")
        if (solutionArray[1].length >= 2) {
            displayBox.textContent = solution.toFixed(2);
        } else {
            displayBox.textContent = solution;
        }
    } else {
        displayBox.textContent = solution;
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

let equation = displayBox.textContent.split(" ");

clearButton.addEventListener("click", (event) => {
    displayBox.textContent = "";
    equation = displayBox.textContent.split(" ");
})

deleteButton.addEventListener("click", (event) => {
    if (equation[equation.length - 1] === "") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1).trim();
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        equation = displayBox.textContent.split(" ");
    }
})

sevenButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "7";
        equation = displayBox.textContent.split(" ");
    }
});

eightButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "8";
        equation = displayBox.textContent.split(" ");
    }
});

nineButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "9";
        equation = displayBox.textContent.split(" ");
    }
});

divisionButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " ") {
        return;
    } else if (equation.length === 3) {
        solveEquation();
        displayBox.textContent += " / ";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += " / ";
        equation = displayBox.textContent.split(" ");
    }
});

fourButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "4";
        equation = displayBox.textContent.split(" ");
    }
});

fiveButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "5";
        equation = displayBox.textContent.split(" ");
    }
});

sixButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "6";
        equation = displayBox.textContent.split(" ");
    }
});

multiplicationButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " ") {
        return;
    } else if (equation.length === 3) {
        solveEquation();
        displayBox.textContent += " * ";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += " * ";
        equation = displayBox.textContent.split(" ");
    }
});

oneButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "1";
        equation = displayBox.textContent.split(" ");
    }
});

twoButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "2";
        equation = displayBox.textContent.split(" ");
    }
});

threeButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "3";
        equation = displayBox.textContent.split(" ");
    }
});

additionButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " ") {
        return;
    } else if (equation.length === 3) {
        solveEquation();
        displayBox.textContent += " + ";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += " + ";
        equation = displayBox.textContent.split(" ");
    }
});

zeroButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else {
        displayBox.textContent += "0";
        equation = displayBox.textContent.split(" ");
    }
});

decimalButton.addEventListener("click", (event) => {  
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === "." || displayBox.textContent.slice(-1) === " ") {
        return;
    } else {
        displayBox.textContent += ".";
        equation = displayBox.textContent.split(" ");
    }
});

equalityButton.addEventListener("click", (event) => {
    if (equation[2] !== "") {
        solveEquation();
        equation = displayBox.textContent.split(" ");
    } else {
        return;
    }
});

subtractionButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " ") {
        return;
    } else if (equation.length === 3) {
        solveEquation();
        displayBox.textContent += " - ";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += " - ";
        equation = displayBox.textContent.split(" ");
    }
});

// if display is one number do nothing - DONE
// if display is one number and one operator do nothing
// if display is multiple numbers and operators are between numbers, operate the numbers
// if display is multiple numbers and ends in operator, ignore the last operator

// if there are two operators on the display then solve first equation while keeping second operator