// Global Variables

const displayBox = document.querySelector("#display-box");
const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");
const modulusButton = document.querySelector("#modulus-button");
const divisionButton = document.querySelector("#division-button");
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
const helpButton = document.querySelector("#help-button");

let equation = displayBox.textContent.split(" ");
let lastButton;
let lastOperation;

// Calculator Functions

const add = (num1, num2) => num1 + num2;

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
};

function solveEquation(num1, operation, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    const solution = operate(num1, operation, num2);
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
};

function updateData(button, operation) {
    lastButton = button;
    lastOperation = operation;
    equation = displayBox.textContent.split(" ");
};

// Button Functions

function pressClearButton() {
    if (displayBox.textContent === "0") {
        return;
    } else {
    displayBox.textContent = "0";
    updateData("clear", undefined);
    }
};

function pressDeleteButton() {
    if (equation.length === 1 && equation[0].length === 1 || equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0";
        updateData("delete", undefined);
    } else if (equation[equation.length - 1] === "") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1).trim();
        updateData("delete", undefined);
    } else {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        updateData("delete", undefined);
    }
};

function pressNumberButton(num) {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err" || lastButton === " = ") {
        displayBox.textContent = num;
        updateData(num, undefined);
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += num;
        updateData(num, undefined);
    } else {
        displayBox.textContent += num;
        updateData(num, undefined);
    }
};

function pressOperatorButton(operator) {
    if (displayBox.textContent.length >= 15 || displayBox.textContent.slice(-1) === " " || equation[equation.length - 1] === "Err") {
        return;
    } else if (equation.length === 3) {
        solveEquation(equation[0], equation[1], equation[2]);
        updateData(operator, equation[1] + equation[2]);
        displayBox.textContent += operator;
    } else {
        displayBox.textContent += operator;
        updateData(operator, undefined);
    }
};

function pressNegativeButton() {
    if (displayBox.textContent.length >= 15 || equation[equation.length - 1] === "" || equation[equation.length - 1] === "Err" || parseFloat(equation[equation.length - 1]) === 0) {
        return;
    } else {
        equation[equation.length - 1] = String(equation[equation.length - 1] * -1);
        displayBox.textContent = equation.join(" ");
        updateData("negative", undefined);
    }
};

function pressZeroButton() {
    if (displayBox.textContent.length >= 15 || (equation[equation.length - 1] === "0")) {
        return;
    } else if (equation[equation.length - 1] === "Err" || lastButton === " = ") {
        displayBox.textContent = "0";
        updateData("0", undefined);
    } else {
        displayBox.textContent += "0";
        updateData("0", undefined);
    }
};

function pressDecimalButton() {
        if (displayBox.textContent.length >= 15 || equation[equation.length - 1].includes(".") === true) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0.";
        updateData(".", undefined);
    } else if (displayBox.textContent.slice(-1) === " ") {
        displayBox.textContent += "0.";
        updateData(".", undefined);
    } else {
        displayBox.textContent += ".";
        updateData(".", undefined);
    }
};

function pressEqualityButton() {
    if (equation[equation.length - 1] === "Err") {
        return;
    } else if (lastButton === " = " && lastOperation !== undefined) {
        solveEquation(equation[0], lastOperation.split(" ")[0], lastOperation.split(" ")[1]);
        updateData(" = ", lastOperation);
    } else if (equation[2] !== "" && equation[2] !== undefined) {
        solveEquation(equation[0], equation[1], equation[2]);
        updateData(" = ", `${equation[1]} ${equation[2]}`);
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

helpButton.addEventListener("click", (event) => {
    alert("Keyboard Shortcuts:\n\nClear Button: C or Esc\nDelete Button: Backspace or Delete\nOperators: % \ * + -\nNumbers: 0-9\nNegative: N\nDecimal: .\nEquality: = or Enter");
});

//Keyboard Button Event Listeners

addEventListener("keydown", (event) => { 
    switch(event.key) {
        case "c":
            return pressClearButton();
        case "Escape":
            return pressClearButton();
        case "Backspace":
            return pressDeleteButton();
        case "Delete":
            return pressDeleteButton();
        case "%":
            return pressOperatorButton(" % ");
        case "/":
            return pressOperatorButton(" / ");
        case "7":
            return pressNumberButton("7");
        case "8":
            return pressNumberButton("8");
        case "9":
            return pressNumberButton("9");
        case "*":
            return pressOperatorButton(" * ");
        case "4":
            return pressNumberButton("4");
        case "5":
            return pressNumberButton("5");
        case "6":
            return pressNumberButton("6");
        case "+":
            return pressOperatorButton(" + ");
        case "1":
            return pressNumberButton("1");
        case "2":
            return pressNumberButton("2");
        case "3":
            return pressNumberButton("3");
        case "-":
            return pressOperatorButton(" - ");
        case "n":
            return pressNegativeButton();
        case "0":
            return pressZeroButton();
        case ".":
            return pressDecimalButton();
        case "=":
            return pressEqualityButton();
        case "Enter":
            return pressEqualityButton();
    }
});