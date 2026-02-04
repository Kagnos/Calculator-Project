// Global Variables

const displayBox = document.querySelector("#display-box");
const allButtons = document.querySelectorAll(".button");

let equation = displayBox.textContent.split(" ");
let lastButton;
let lastOperation;

const historyMessage = [];

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
    if (solution !== solution || solution === Infinity || String(solution).length > 15) {
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

// Lengthy Check Functions

const isLastItem = (item) => equation[equation.length - 1] === item;

const isLastCharacter = (character) => displayBox.textContent.slice(-1) === character;

const secondNumberExists = () => equation[2] !== "" && equation[2] !== undefined;

function isDisplayUnacceptable (button) {
    switch(button) {
        case "clear":
            return displayBox.textContent === "0";
        case "delete":
            return equation.length === 1 && equation[0].length === 1 && equation[0] === "0";
        case "operator":
            return displayBox.textContent.length >= 15 || isLastItem("Err");
        case "number":
            return displayBox.textContent.length >= 15;
        case "negative":
            return displayBox.textContent.length >= 15 || isLastItem("") || isLastItem("Err") || parseFloat(equation[equation.length - 1]) === 0;
        case "zero":
            return displayBox.textContent.length >= 15 || isLastItem("0");
        case "decimal":
            return displayBox.textContent.length >= 15 || equation[equation.length - 1].includes(".") === true;
    }
};

// Button Functions

function pressClearButton() {
    if (isDisplayUnacceptable("clear")) {
        return;
    } else {
    displayBox.textContent = "0";
    updateData("clear", undefined);
    }
};

function pressDeleteButton() {
    if (isDisplayUnacceptable("delete")) {
        return;
    }else if (equation.length === 1 && equation[0].length === 1 || isLastItem("Err")) {
        displayBox.textContent = "0";
        updateData("delete", undefined);
    } else if (isLastItem("")) {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1).trim();
        updateData("delete", undefined);
    } else {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        updateData("delete", undefined);
    }
};

function pressOperatorButton(operator) {
    if (isDisplayUnacceptable("operator")) {
        return;
    } else if (isLastCharacter(" ")) {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1).trim();
        displayBox.textContent += operator;
        updateData(operator, undefined);
    } else if (isLastCharacter("e")) {
        displayBox.textContent += "0";
        displayBox.textContent += operator;
        updateData(operator, undefined);
    } else if (equation.length === 3) {
        historyMessage.push(equation.join(" "));
        solveEquation(equation[0], equation[1], equation[2]);
        updateData(operator, equation[1] + equation[2]);
        displayBox.textContent += operator;
    } else {
        displayBox.textContent += operator;
        updateData(operator, undefined);
    }
};

function pressNumberButton(num) {
    if (isDisplayUnacceptable("number")) {
        return;
    } else if (isLastItem("Err") || lastButton === " = ") {
        displayBox.textContent = num;
        updateData(num, undefined);
    } else if (isLastItem("0")) {
        displayBox.textContent = displayBox.textContent.trim().slice(0,-1);
        displayBox.textContent += num;
        updateData(num, undefined);
    } else {
        displayBox.textContent += num;
        updateData(num, undefined);
    }
};

function pressNegativeButton() {
    if (isDisplayUnacceptable("negative")) {
        return;
    } else {
        equation[equation.length - 1] = String(equation[equation.length - 1] * -1);
        displayBox.textContent = equation.join(" ");
        updateData("negative", undefined);
    }
};

function pressZeroButton() {
    if (isDisplayUnacceptable("zero")) {
        return;
    } else if (isLastItem("Err") || lastButton === " = ") {
        displayBox.textContent = "0";
        updateData("0", undefined);
    } else {
        displayBox.textContent += "0";
        updateData("0", undefined);
    }
};

function pressDecimalButton() {
        if (isDisplayUnacceptable("decimal")) {
        return;
    } else if (isLastItem("Err")) {
        displayBox.textContent = "0.";
        updateData(".", undefined);
    } else if (isLastCharacter(" ")) {
        displayBox.textContent += "0.";
        updateData(".", undefined);
    } else {
        displayBox.textContent += ".";
        updateData(".", undefined);
    }
};

function pressEqualityButton() {
    if (isLastItem("Err")) {
        return;
    } else if (lastButton === " = " && lastOperation !== undefined) {
        historyMessage.push(equation.join(" "));
        solveEquation(equation[0], lastOperation.split(" ")[0], lastOperation.split(" ")[1]);
        updateData(" = ", lastOperation);
    } else if (secondNumberExists()) {
        historyMessage.push(equation.join(" "));
        solveEquation(equation[0], equation[1], equation[2]);
        updateData(" = ", `${equation[1]} ${equation[2]}`);
    }
};

const pressHelpButton = () => alert("Keyboard Shortcuts:\n\nClear Button: C or Esc\nDelete Button: Backspace or Delete\nOperators: % \ * + -\nNumbers: 0-9\nNegative: N\nDecimal: .\nEquality: = or Enter\n\nPossible Error Reasons:\n\nResult is too large and equates to infinity\nResult has too many characters for display (>15)\nNumber is divided by 0 and returns NaN or infinity");

function pressHistoryButton () {
    if (historyMessage.length > 10) {
        historyMessage.shift()
        alert(historyMessage.join("\n"));
    } else {
        alert(historyMessage.join("\n"));
    }
};

// Button Event Listeners

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id) {
            case "clear-button":
                return pressClearButton();
            case "delete-button":
                return pressDeleteButton();
            case "modulus-button":
                return pressOperatorButton(" % ");
            case "division-button":
                return pressOperatorButton(" / ");
            case "seven-button":
                return pressNumberButton("7");
            case "eight-button":
                return pressNumberButton("8");
            case "nine-button":
                return pressNumberButton("9");
            case "multiplication-button":
                return pressOperatorButton(" * ");
            case "four-button":
                return pressNumberButton("4");
            case "five-button":
                return pressNumberButton("5");
            case "six-button":
                return pressNumberButton("6");
            case "addition-button":
                return pressOperatorButton(" + ");
            case "one-button":
                return pressNumberButton("1");
            case "two-button":
                return pressNumberButton("2");
            case "three-button":
                return pressNumberButton("3");
            case "subtraction-button":
                return pressOperatorButton(" - ");
            case "negative-button":
                return pressNegativeButton();
            case "zero-button":
                return pressZeroButton();
            case "decimal-button":
                return pressDecimalButton();
            case "equality-button":
                return pressEqualityButton();
            case "help-button":
                return pressHelpButton();
            case "history-button":
                return pressHistoryButton();
        }
    })
});

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

// fix bug: negative results with large decimals (>3) give an error, it's not a problem with operate() itself
// add solutions to equation history