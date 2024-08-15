const app = document.getElementById('app')
// const gameBox = document.createElement('table')

// Creating a random number in JS
const randomNumber = Math.trunc(Math.random()* 100 + 1)
// const randomNumber = Math.random() * 10 + 1

console.log(randomNumber);

// Create Prompt for user to guess
let guess
let output = ''
console.log(guess);

// setTimeout(() =>{
//     console.log('This is a throwaway message');
// }, 2000)


window.alert('Welcome! Please guess a number between 1-100')

do {
    guess = parseInt(window.prompt('Pick a number between 1 - 100'))
    if(randomNumber === guess){
        output = 'You are correct.'
    } else {
        output = `Sorry the random number was ${randomNumber}, guess again.`
    }
    window.alert(output)

} while (randomNumber !== guess)