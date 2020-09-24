// import functions and grab DOM elements
const inputOne = document.getElementById('number-one')
const inputTwo = document.getElementById('number-two')

const inputOneS = document.getElementById('number-one-s')
const inputTwoS = document.getElementById('number-two-s')

const inputOneM = document.getElementById('number-one-m')
const inputTwoM = document.getElementById('number-two-m')

const inputOneD = document.getElementById('number-one-d')
const inputTwoD = document.getElementById('number-two-d')


const button = document.getElementById('button')
const answer = document.getElementById('answer')
// initialize state

button.addEventListener('click', () => {
    const answeri = Number(inputOne.value) + Number(inputTwo.value)
    const answeri = Number(inputOneS.value) - Number(inputTwoS.value)
    const answeri = Number(inputOneM.value) * Number(inputTwoM.value)
    const answeri = Number(inputOneD.value) / Number(inputTwoD.value)
    answer.textContent = answeri
})

// set event listeners to update state and DOM