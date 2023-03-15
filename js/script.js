console.log('no hej')
const screenDisplay = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');

let calculation = []
let accumulativeCalculation

function calculate(button) {
    const value = button.textContent
    if (value == "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value == "=") {
        console.log(accumulativeCalculation)
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
}


buttons.forEach(button => button.addEventListener('click', () => calculate(button)))