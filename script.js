const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const remainder = (num1, num2) => num1 % num2; 

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
        case "%":
            return remainder(num1, num2)
    }
}

function solveEquation() {
    equation = displayBox.textContent.split(" ", 3);
    const num1 = parseInt(equation[0]);
    const num2 = parseInt(equation[2]);
    const solution = operate(num1, equation[1], num2);
    if (solution !== solution) {
        displayBox.textContent = "Err"
    } else if (solution.toString().includes(".") === true){
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
const clearButton = document.querySelector("#clear-button");
const modulusButton = document.querySelector("#modulus-button");
const divisionButton = document.querySelector("#division-button");
const deleteButton = document.querySelector("#delete-button");
const sevenButton = document.querySelector("#seven-button");
const eightButton = document.querySelector("#eight-button");
const nineButton = document.querySelector("#nine-button");
const multiplicationButton = document.querySelector("#multiplication-button");
const fourButton = document.querySelector("#four-button");
const fiveButton = document.querySelector("#five-button");
const sixButton = document.querySelector("#six-button");
const additionButton = document.querySelector("#addition-button");
const oneButton = document.querySelector("#one-button");
const twoButton = document.querySelector("#two-button");
const threeButton = document.querySelector("#three-button");
const subtractionButton = document.querySelector("#subtraction-button");
const negativeButton = document.querySelector("#negative-button");
const zeroButton = document.querySelector("#zero-button");
const decimalButton = document.querySelector("#decimal-button");
const equalityButton = document.querySelector("#equality-button");

let equation = displayBox.textContent.split(" ");

clearButton.addEventListener("click", (event) => {
    displayBox.textContent = "0";
    equation = displayBox.textContent.split(" ");
})

deleteButton.addEventListener("click", (event) => {
    if (equation.length === 1 && equation[0].length === 1 || equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1).trim();
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        equation = displayBox.textContent.split(" ");
    }
})

modulusButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " " || equation[equation.length - 1] === "Err") {
        return;
    } else if (equation.length === 3) {
        solveEquation();
        displayBox.textContent += " % ";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += " % ";
        equation = displayBox.textContent.split(" ");
    }
});

divisionButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " " || equation[equation.length - 1] === "Err") {
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

sevenButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "7";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += "7";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "7";
        equation = displayBox.textContent.split(" ");
    }
});

eightButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "8";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += "8";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "8";
        equation = displayBox.textContent.split(" ");
    }
});

nineButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "9";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += "9";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "9";
        equation = displayBox.textContent.split(" ");
    }
});

multiplicationButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " " || equation[equation.length - 1] === "Err") {
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

fourButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "4";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += "4";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "4";
        equation = displayBox.textContent.split(" ");
    }
});

fiveButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "5";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += "5";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "5";
        equation = displayBox.textContent.split(" ");
    }
});

sixButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "6";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += "6";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "6";
        equation = displayBox.textContent.split(" ");
    }
});

additionButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " " || equation[equation.length - 1] === "Err") {
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

oneButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "1";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += "1";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "1";
        equation = displayBox.textContent.split(" ");
    }
});

twoButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "2";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += "2";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "2";
        equation = displayBox.textContent.split(" ");
    }
});

threeButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "3";
        equation = displayBox.textContent.split(" ");
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += "3";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "3";
        equation = displayBox.textContent.split(" ");
    }
});

subtractionButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " " || equation[equation.length - 1] === "Err") {
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

negativeButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || equation[equation.length - 1] === "" || equation[equation.length - 1] === "Err") {
        return;
    } else {
        equation[equation.length - 1] = String(equation[equation.length - 1] * -1) 
        displayBox.textContent = equation;
        equation = displayBox.textContent.split(" ");
    }
});

zeroButton.addEventListener("click", (event) => {
    if (displayBox.textContent.length >= 15 || (equation[equation.length - 1] === "0")) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += "0";
        equation = displayBox.textContent.split(" ");
    }
});

decimalButton.addEventListener("click", (event) => {  
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === "." || displayBox.textContent.slice(-1) === " ") {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0.";
        equation = displayBox.textContent.split(" ");
    } else {
        displayBox.textContent += ".";
        equation = displayBox.textContent.split(" ");
    }
});

equalityButton.addEventListener("click", (event) => {
    if (equation[2] !== "" && equation[2] !== undefined) {
        solveEquation();
        equation = displayBox.textContent.split(" ");
    } else {
        return;
    }
});

// Keep 0 when user inputs an operator - DONE
// Make default screen 0 - DONE
// add modulus button functionality - DONE
// add error message for divide by zero - DONE

// fix bug: decimals not tracking
// fix bug: can use multiple decimals in a number
// clear error message when user inputs with a button
// add negative button functionality
// Replace 0 when user inputs a number
// Restrict user to only input one 0 at the beginning of each number
// Change favicon to be red, orange, gray, green or some other combination that includes the orange color
// Allow user to use keyboard for inputs