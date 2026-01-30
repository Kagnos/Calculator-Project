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

function solveEquation() {
    equation = displayBox.textContent.split(" ", 3);
    const num1 = parseFloat(equation[0]);
    const num2 = parseFloat(equation[2]);
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
};

function updateEquationData() {
    equation = displayBox.textContent.split(" ");
};

// Button Functions

function pressClearButton() {
    displayBox.textContent = "0";
    updateEquationData();
};

function pressDeleteButton() {
    if (equation.length === 1 && equation[0].length === 1 || equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0";
        updateEquationData();
    } else if (equation[equation.length - 1] === "") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1).trim();
        updateEquationData();
    } else {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        updateEquationData();
    }
}

function pressNumberButton(num) {
    if (displayBox.textContent.length >= 15) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = num;
        updateEquationData();
    } else if (equation[equation.length - 1] === "0") {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += num;
        updateEquationData();
    } else {
        displayBox.textContent += num;
        updateEquationData();
    }
};

function pressOperatorButton(operator) {
    if (displayBox.textContent.length >= 15 || displayBox.textContent.slice(-1) === " " || equation[equation.length - 1] === "Err") {
        return;
    } else if (equation.length === 3) {
        solveEquation();
        displayBox.textContent += operator;
        updateEquationData();
    } else {
        displayBox.textContent += operator;
        updateEquationData();
    }
};

function pressNegativeButton() {
    if (displayBox.textContent.length >= 15 || equation[equation.length - 1] === "" || equation[equation.length - 1] === "Err" || parseFloat(equation[equation.length - 1]) === 0) {
        return;
    } else {
        equation[equation.length - 1] = String(equation[equation.length - 1] * -1);
        displayBox.textContent = equation.join(" ");
        updateEquationData();
    }
};

function pressZeroButton() {
    if (displayBox.textContent.length >= 15 || (equation[equation.length - 1] === "0")) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0";
        updateEquationData();
    } else {
        displayBox.textContent += "0";
        updateEquationData();
    }
}

function pressDecimalButton() {
        if (displayBox.textContent.length >= 15 || equation[equation.length - 1].includes(".") === true) {
        return;
    } else if (equation[equation.length - 1] === "Err") {
        displayBox.textContent = "0.";
        updateEquationData();
    } else if (displayBox.textContent.slice(-1) === " ") {
        displayBox.textContent += "0.";
        updateEquationData();
    } else {
        displayBox.textContent += ".";
        updateEquationData();
    }
};

function pressEqualityButton() {
    if (equation[2] !== "" && equation[2] !== undefined) {
        solveEquation();
        updateEquationData();
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
    lastButton = "3";
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

//Keyboard Button Event Listeners

addEventListener("keydown", (event) => { 
    switch(event.key) {
        case "c":
            return pressClearButton();
        case "Escape":
            return pressClearButton();
        case "Backspace":
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


// Keep 0 when user inputs an operator - DONE
// Make default screen 0 - DONE
// add modulus button functionality - DONE
// add error message for divide by zero - DONE
// clear error message when user inputs with a button - DONE
// Replace 0 when user inputs a number - DONE
// add negative button functionality - DONE
// Restrict user to only input one 0 at the beginning of each number - DONE
// fix bug: can use multiple decimals in a number - DONE
// Change favicon to be red, orange, gray, green or some other combination that includes the orange color - DONE
// fix bug: negative button breaks second number - DONE
// fix bug: decimals not tracking, everything always gets rounded down for some reason except with division for some reason - DONE
// fix bug: negative button doesn't work on 0 with decimals (this is because of the decimal rounding bug) - DONE
// Allow user to use keyboard for inputs - DONE

// replace solution with number if number button pressed after equality button pressed - this feature is a bit complex for the scope of this project, I might leave it out