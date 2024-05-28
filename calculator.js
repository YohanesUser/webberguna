document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.textContent;

            if (!isNaN(value) || value === '.') {
                currentInput += value;
            } else if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                handleOperator(value);
            }

            display.value = currentInput;
        });
    });

    function handleOperator(op) {
        if (operator !== '') {
            calculate();
        }
        operator = op;
        firstOperand = currentInput;
        currentInput = '';
    }

    function calculate() {
        if (currentInput === '') {
            return;
        }
        secondOperand = currentInput;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            case 'sqrt':
                result = Math.sqrt(parseFloat(secondOperand));
                break;
            case 'pow':
                result = Math.pow(parseFloat(firstOperand), parseFloat(secondOperand));
                break;
            case 'cos':
                result = Math.cos(parseFloat(secondOperand));
                break;
            case 'sin':
                result = Math.sin(parseFloat(secondOperand));
                break;
            case 'tan':
                result = Math.tan(parseFloat(secondOperand));
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = '';
        firstOperand = '';
        secondOperand = '';
    }

    function clearDisplay() {
        currentInput = '';
        operator = '';
        firstOperand = '';
        secondOperand = '';
    }
});
