'use strict';

let numbers = document.querySelectorAll('.number');
let calculatorDisplay = document.querySelector('.display');
let operators = document.querySelectorAll('.operator');
let equalBtn = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let total = '';
calculatorDisplay.value = 0;

// FUNCTION TO PERFORM CALCULATION
const calculate = function (a, b, operator) {
  if (operator === '') {
    calculatorDisplay.value = firstNumber;
  } else {
    switch (operator) {
      case '+':
        total = a + b;
        break;
      case '-':
        total = a - b;
        break;
      case '/':
        total = a / b;
        break;
      case '*':
        total = a * b;
        break;
    }

    calculatorDisplay.value = total;
    firstNumber = total;
    secondNumber = '';
  }
};

// GET USER NUMBERS INPUT
numbers.forEach(num =>
  num.addEventListener('click', () => {
    if (firstNumber !== '' && operator !== '') {
      if (secondNumber.includes('.') && num.textContent === '.') {
        calculatorDisplay.value = secondNumber;
      } else {
        secondNumber += num.textContent;
        calculatorDisplay.value = secondNumber;
      }
    } else {
      if (firstNumber.includes('.') && num.textContent === '.') {
        calculatorDisplay.value = firstNumber;
      } else {
        firstNumber += num.textContent;
        calculatorDisplay.value = firstNumber;
      }
    }
  })
);

// GET OPERATOR
operators.forEach(op => {
  op.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '') {
      calculate(+firstNumber, +secondNumber, operator);
    }
    operator = op.textContent;
  });
});

// CALL CALCULATE FUNTION ON EQUALBTN CLICK
equalBtn.addEventListener('click', () => {
  calculate(+firstNumber, +secondNumber, operator);
});

// CLEAR
const clear = function () {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  total = '';
  calculatorDisplay.value = 0;
};

// CALL CLEAR FUNCTION
clearBtn.addEventListener('click', clear);
