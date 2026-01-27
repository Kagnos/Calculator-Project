const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

function operate(operator, num1, num2) {
    switch(operator) {
        case add:
            return add(num1, num2);
        case subtract:
            return subtract(num1, num2);
        case multiply:
            return multiply(num1, num2);
        case divide:
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

sevenButton.addEventListener("click", (event) => {
    displayBox.textContent = "7";
});

eightButton.addEventListener("click", (event) => {
    displayBox.textContent = "8";
});

nineButton.addEventListener("click", (event) => {
    displayBox.textContent = "9";
});

fourButton.addEventListener("click", (event) => {
    displayBox.textContent = "4";
});

fiveButton.addEventListener("click", (event) => {
    displayBox.textContent = "5";
});

sixButton.addEventListener("click", (event) => {
    displayBox.textContent = "6";
});

oneButton.addEventListener("click", (event) => {
    displayBox.textContent = "1";
});

twoButton.addEventListener("click", (event) => {
    displayBox.textContent = "2";
});

threeButton.addEventListener("click", (event) => {
    displayBox.textContent = "3";
});

zeroButton.addEventListener("click", (event) => {
    displayBox.textContent = "0";
});