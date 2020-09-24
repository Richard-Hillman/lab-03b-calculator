// import functions and grab DOM elements
const inputOne = document.getElementById('number-one')
const inputTwo = document.getElementById('number-two')
const button = document.getElementById('button')
const answer = document.getElementById('answer')
// initialize state

button.addEventListener('click', () => {
    const answeri = parseFloat(inputOne.value) + parseFloat(inputTwo.value)
    answer.textContent = answeri
})

// set event listeners to update state and DOM