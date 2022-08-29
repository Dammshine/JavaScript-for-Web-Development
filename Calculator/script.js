/**
 * 
 */
class Calculator {
  constructor(previousOperantTextElement, currentOperantTextElement) {
    this.previousOperantTextElement = previousOperantTextElement;
    this.currentOperantTextElement = currentOperantTextElement;
    this.previousOperant = previousOperantTextElement.innerText;
    this.currentOperant = currentOperantTextElement.innerText;
    this.operation = undefined;
  }

  clear() {
    this.previousOperant = '';
    this.currentOperant = '';
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {
    // console.log(`number ${number}`);
    if (number === '.' && this.currentOperant[this.currentOperant.length - 1] === '.') {
      return;
    }
    this.currentOperant = this.currentOperant + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperant.length === 0) return;
    if (this.previousOperant.length !== 0) {
      this.compute();
    }

    this.operation = operation;
    this.previousOperant = this.currentOperant;
    this.currentOperant = '';
  }

  compute() {
    let curr = parseFloat(this.currentOperant);
    let prev = parseFloat(this.previousOperant);
    let operation = this.operation;
    if (operation === undefined) {
      return;
    }
    if (isNan(curr) || isNan(prev)) {
      return;
    }

    if (operation === '+') this.previousOperant = (prev + curr).toString();
    if (operation === '-') this.previousOperant = (prev - curr).toString();
    if (operation === '*') this.previousOperant = (prev * curr).toString();
    if (operation === '%') this.previousOperant = (prev / curr).toString();

    this.operation = undefined;
  }

  updateDisplay() {
    this.currentOperantTextElement.innerText = this.currentOperant;
    this.previousOperantTextElement.innerText = this.previousOperant;
  }
}


// Select all different opperant, number
const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperantTextElement = document.querySelector('[data-previous-operant]');
const currentOperantTextElement = document.querySelector('[data-current-operant]');

const calculator = new Calculator(previousOperantTextElement, currentOperantTextElement);
numberButton.forEach(buttom => {
  buttom.addEventListener('click', () => {
    calculator.appendNumber(buttom.innerText);
    calculator.updateDisplay();
  });
})

operationButton.forEach(buttom => {
  buttom.addEventListener('click', () => {
    calculator.chooseOperation(buttom.innerText);
    calculator.updateDisplay();
  });
})

equalButton.addEventListener('click', buttom => {

});
