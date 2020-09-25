import { 
    addNumbers, 
    subtractNumbers,
    multiplyNumbers,
    divideNumbers,
} from './math.js';

const addResults = document.getElementById(answer);
const inputOne = document.getElementById('number-one');
const inputTwo = document.getElementById('number-two');

export function handleAddClick() {
    const value1 = inputOne.value;
    const value2 = inputTwo.value;

    const sum = addNumbers(value1, value2)

    addResults.textContent = answeri;

}