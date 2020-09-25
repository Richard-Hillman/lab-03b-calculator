import { 
    addNumbers, 
    subtractNumbers,
    multiplyNumbers,
    divideNumbers,
} from './math.js';


// ==============================================================
const addResults = document.getElementById('answer');
const inputOne = document.getElementById('number-one');
const inputTwo = document.getElementById('number-two');

export function handleAddClick() {
    const value1 = inputOne.value;
    const value2 = inputTwo.value;

    const answer = addNumbers(value1, value2);

    addResults.textContent = answer;
    
}

// ==============================================================

const subtractResults = document.getElementById('answers');
const inputOneS = document.getElementById('number-one-s');
const inputTwoS = document.getElementById('number-two-s');

export function handleSubtractClick() {
    const value1 = inputOneS.value;
    const value2 = inputTwoS.value;

    const answer = subtractNumbers(value1, value2);

    subtractResults.textContent = answer;

}

// ===============================================================

const multiplyResults = document.getElementById('answerm');
const inputOneM = document.getElementById('number-one-m');
const inputTwoM = document.getElementById('number-two-m');

export function handleMultiplyClick() {
    const value1 = inputOneM.value;
    const value2 = inputTwoM.value;

    const answer = multiplyNumbers(value1, value2)

    multiplyResults.textContent = answer;

}

// ===============================================================

const divideResults = document.getElementById('answerd');
const inputOneD = document.getElementById('number-one-d');
const inputTwoD = document.getElementById('number-two-d');

export function handleDivideClick() {
    const value1 = inputOneD.value;
    const value2 = inputTwoD.value;

    const answer = divideNumbers(value1, value2)

    divideResults.textContent = answer;

}