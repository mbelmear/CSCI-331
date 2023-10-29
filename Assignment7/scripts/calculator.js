// Get input fields and result element
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("output");
const operator = document.getElementById("operator");

// Get operation buttons
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const greaterthanButton = document.getElementById("greaterthan");
const lessthanButton = document.getElementById("lessthan");
const clearButton = document.getElementById("clear");

// Get mobile buttons
const addMobileButton = document.getElementById("addmobile");
const subtractMobileButton = document.getElementById("subtractmobile");
const multiplyMobileButton = document.getElementById("multiplymobile");
const divideMobileButton = document.getElementById("dividemobile");

// Add click event listeners to the operation buttons (Desktop)
addButton.addEventListener('click', () => calculate("add"));
subtractButton.addEventListener('click', () => calculate("subtract"));
multiplyButton.addEventListener('click', () => calculate("multiply"));
divideButton.addEventListener('click', () => calculate("divide"));
greaterthanButton.addEventListener('click', () => calculate("greaterthan"));
lessthanButton.addEventListener('click', () => calculate("lessthan"));
clearButton.addEventListener('click', () => calculate("clear"));

// Add click event listeners to the operation buttons (Mobile)
addMobileButton.addEventListener('click', () => calculate("addmobile"));
subtractMobileButton.addEventListener('click', () => calculate("subtractmobile"));
multiplyMobileButton.addEventListener('click', () => calculate("multiplymobile"));
divideMobileButton.addEventListener('click', () => calculate("dividemobile"));

// Function to perform calculations
function calculate(operation) {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Invalid Input";
    } else {
        switch (operation) {
            case "add":
            case "addmobile":
                operator.textContent = '+';
                result.textContent = num1 + num2;
                break;
            case "subtract":
            case "subtractmobile":
                operator.textContent = '-';
                result.textContent = num1 - num2;
                break;
            case "multiply":
            case "multiplymobile":
                operator.textContent = '×';
                result.textContent = num1 * num2;
                break;
            case "divide":
            case "dividemobile":
                if (num2 === 0) {
                    result.textContent = 'Cannot divide by zero';
                } else {
                    operator.textContent = '÷';
                    result.textContent = num1 / num2;
                }
                break;
            case "greaterthan":
                operator.textContent = '≥';
                result.textContent = num1 >= num2 ? 'True' : 'False';
                break;
            case "lessthan":
                operator.textContent = '≤';
                result.textContent = num1 <= num2 ? 'True' : 'False';
                break;
            case "clear":
                input1.value = '';
                input2.value = '';
                operator.textContent = '';
                result.textContent = '0';
                break;
            default:
                result.textContent = 'Invalid operation';
        }
    }
}