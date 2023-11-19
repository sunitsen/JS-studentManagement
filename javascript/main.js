// Initialize variables to keep track of input, operation, and result display status
let currentInput = '';
let currentOperation = '';
let resultDisplayed = false;

// Function to append a value to the display
function appendToDisplay(value) {
    // If a result is displayed, clear the display before appending new input
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    // Append the provided value to the current input
    currentInput += value;
    // Update the display with the current input
    document.getElementById('display').value = currentInput;
}

// Function to set the operation (e.g., +, -, *, /)
function setOperation(operation) {
    // Check if there is existing input before setting the operation
    if (currentInput !== '') {
        // Update the current operation and append it to the input for display
        currentOperation = operation;
        currentInput += operation;
        document.getElementById('display').value = currentInput;
    }
}

// Function to add a decimal point to the current input
function setDecimal() {
    // If a result is displayed, clear the display before adding a decimal
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    // Check if the current input already includes a decimal point
    if (!currentInput.includes('.')) {
        // If not, add a decimal point to the current input
        currentInput += '.';
        // Update the display with the current input
        document.getElementById('display').value = currentInput;
    }
}

// Function to clear the display and reset variables
function clearDisplay() {
    // Reset input, operation, and result display status
    currentInput = '';
    currentOperation = '';
    resultDisplayed = false;
    // Clear the display on the HTML page
    document.getElementById('display').value = '';
}

// Function to perform the calculation when the '=' button is clicked
function calculate() {
    try {
        // Use the eval function to evaluate the current input as a mathematical expression
        const result = eval(currentInput);
        // Update the display with the calculated result
        document.getElementById('display').value = result;
        // Update the current input with the result for potential further calculations
        currentInput = result.toString();
        // Set the result display status to true
        resultDisplayed = true;
    } catch (error) {
        // If an error occurs during evaluation, display 'Error' on the calculator
        document.getElementById('display').value = 'Error';
    }
}
