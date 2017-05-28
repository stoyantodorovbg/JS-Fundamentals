/**
 * Created by Stoyan on 27.5.2017 г..
 */
function  calculator(num1, num2, operator) {

    function calculate(num1, num2, func) {
        return func(num1, num2);
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }

    function restOfDivide(num1, num2) {
        return num1 % num2;
    }

    function power(num1, num2) {
        return num1 ** num2;
    }
    
    switch (operator) {
        case '+':
          return calculate(num1, num2, add);
        case '-':
            return calculate(num1, num2, subtract);
            case '*':
                return calculate(num1, num2, multiply);
        case '/':
            return calculate(num1, num2, divide);
        case '%':
            return calculate(num1, num2, restOfDivide);
        case '**':
            return calculate(num1, num2, power);
    }

}

console.log(calculator(3, 2, '+'));
