// Global Variables

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

// Calculator Functions

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
        if (solutionArray[1].length > 3) {
            displayBox.textContent = solution.toFixed(3);
        } else {
            displayBox.textContent = solution;
        }
    } else {
        displayBox.textContent = solution;
    }
}

function updateEquationVariable() {
    equation = displayBox.textContent.split(" ");
};

// Button Functions

function pressClearButton() {
    displayBox.textContent = "0";
    updateEquationVariable();
};

function pressDeleteButton() {
    if (equation.length === 1 && equation[0].length === 1 || equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0";
        updateEquationVariable();
    } else if (equation[equation.length - 1] === "") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1).trim();
        updateEquationVariable();
    } else {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        updateEquationVariable();
    }
}

function pressNumberButton(num) {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = num;
        updateEquationVariable();
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += num;
        updateEquationVariable();
    } else {
        displayBox.textContent += num;
        updateEquationVariable();
    }
};

function pressOperatorButton(operator) {
    if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || displayBox.textContent.slice(-1) === " " || equation[equation.length - 1] === "Err") {
        return;
    } else if (equation.length === 3) {
        solveEquation();
        displayBox.textContent += operator;
        updateEquationVariable();
    } else {
        displayBox.textContent += operator;
        updateEquationVariable();
    }
};

function pressNegativeButton() {
    if (displayBox.textContent.length >= 15 || equation[equation.length - 1] === "" || equation[equation.length - 1] === "Err" || parseInt(equation[equation.length - 1]) === 0) {
        return;
    } else {
        equation[equation.length - 1] = String(equation[equation.length - 1] * -1) 
        displayBox.textContent = equation;
        updateEquationVariable();
    }
};

function pressZeroButton() {
    if (displayBox.textContent.length >= 15 || (equation[equation.length - 1] === "0")) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0";
        updateEquationVariable();
    } else {
        displayBox.textContent += "0";
        updateEquationVariable();
    }
}

function pressDecimalButton() {
        if (displayBox.textContent.length >= 15 || displayBox.textContent === "" || equation[equation.length - 1].includes(".") === true) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0.";
        updateEquationVariable();
    } else if (displayBox.textContent.slice(-1) === " ") {
        displayBox.textContent += "0.";
        updateEquationVariable();
    } else {
        displayBox.textContent += ".";
        updateEquationVariable();
    }
};

function pressEqualityButton() {
    if (equation[2] !== "" && equation[2] !== undefined) {
        solveEquation();
        updateEquationVariable();
    } else {
        return;
    }
};

// Button Event Listeners

clearButton.addEventListener("click", (event) => {
    pressClearButton();
});

deleteButton.addEventListener("click", (event) => {
    pressDeleteButton();
});

modulusButton.addEventListener("click", (event) => {
    pressOperatorButton(" % ");
});

divisionButton.addEventListener("click", (event) => {
    pressOperatorButton(" / ");
});

sevenButton.addEventListener("click", (event) => {
    pressNumberButton("7");
});

eightButton.addEventListener("click", (event) => {
    pressNumberButton("8");
});

nineButton.addEventListener("click", (event) => {
    pressNumberButton("9");
});

multiplicationButton.addEventListener("click", (event) => {
    pressOperatorButton(" * ");
});

fourButton.addEventListener("click", (event) => {
    pressNumberButton("4");
});

fiveButton.addEventListener("click", (event) => {
    pressNumberButton("5");
});

sixButton.addEventListener("click", (event) => {
    pressNumberButton("6");
});

additionButton.addEventListener("click", (event) => {
    pressOperatorButton(" + ");
});

oneButton.addEventListener("click", (event) => {
    pressNumberButton("1");
});

twoButton.addEventListener("click", (event) => {
    pressNumberButton("2");
});

threeButton.addEventListener("click", (event) => {
    pressNumberButton("3");
});

subtractionButton.addEventListener("click", (event) => {
    pressOperatorButton(" - ");
});

negativeButton.addEventListener("click", (event) => {
    pressNegativeButton();
});

zeroButton.addEventListener("click", (event) => {
    pressZeroButton();
});

decimalButton.addEventListener("click", (event) => {  
    pressDecimalButton();
});

equalityButton.addEventListener("click", (event) => {
    pressEqualityButton();
});

// Keep 0 when user inputs an operator - DONE
// Make default screen 0 - DONE
// add modulus button functionality - DONE
// add error message for divide by zero - DONE
// clear error message when user inputs with a button - DONE
// Replace 0 when user inputs a number - DONE
// add negative button functionality - DONE
// Restrict user to only input one 0 at the beginning of each number - DONE
// fix bug: can use multiple decimals in a number - DONE

// fix bug: decimals not tracking, everything always gets rounded down for some reason except with division for some reason
// fix bug: negative button breaks second number
// replace solution with number if number button pressed after equality button pressed
// Change favicon to be red, orange, gray, green or some other combination that includes the orange color
// Allow user to use keyboard for inputs