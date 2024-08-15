// =============
//  Example JS Game
// =============
const randomNumber = Math.floor(Math.random() *100 + 1)

console.log(randomNumber);

window.alert(guessNumber(randomNumber))


function guessNumber(randomNumber){
    let guess = parseInt(window.prompt('Please guess a number between 1 - 100'))
    console.log(guess);

    let attempt = 1
    let returnMessage
    
    if(! isNaN(guess)){
        while(guess !== randomNumber && attempt < 10){
            if(guess < randomNumber){
                returnMessage = `Number is higher than your number. please try again. You have ${10-attempt} attemps remaining`
            } else {
                returnMessage = `Number is lower than your guess.You have ${10-attempt} attemps remaining. Try again.`
            }
            attempt++
            guess = parseInt(window.prompt(`${returnMessage}, please pick a number between 1-100`))
            console.log(returnMessage);
            console.log(attempt);
            
        }
    }else{
        returnMessage = "Please enter a valid number."
    }

    if(guess === randomNumber){
        returnMessage = `You win, the number was ${randomNumber}. You guessed the number in ${attempt} attempts.`
    } else if(attempt === 10){
        returnMessage = `Game over. More than 10 tries. The number was${randomNumber}`
    }

    return returnMessage
    
    
}