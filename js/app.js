'use strict';

let count = 0;


let userName = prompt('What is your name?');
askAgain(userName);
console.log('user name', userName);
alert('Welcome to my website ' + userName + ', It\'s so nice to have you here. I\'d love to ask you a few questions. Please answer Yes or No to the following questions.');

let answer1 = prompt('Do you think I\'ve lived in more than 6 states? Yes or No or y/n.').toLowerCase();
answer1 = askAgain(answer1);
console.log('Q1 Answer: ', answer1);
question1(answer1);

let answer2 = prompt('Do you think I\'ve ever skydived before? Yes or No or y/n.').toLowerCase();
answer2 = askAgain(answer2);
console.log('Q2 Answer: ', answer2);
question2(answer2);

let answer3 = prompt('Do you think I\'ve ever been published? Yes or No or y/n.').toLowerCase();
answer3 = askAgain(answer3);
console.log('Q3 Answer: ', answer3);
question3(answer3);

let answer4 = prompt('Have I ever taken coding classes before? Yes or No or y/n.').toLowerCase();
answer4 = askAgain(answer4);
console.log('Q4 Answer: ', answer4);
question4(answer4);

let answer5 = prompt('Do you think I got married by the water? Yes or No or y/n.').toLowerCase();
answer5 = askAgain(answer5);
console.log('Q5 Answer: ', answer5);
question5(answer5);

let answer6 = Math.floor(Math.random() * 10) + 1;
let guessCount = 0;
console.log(`Q6 answer ${answer6}`);
let guess6 = prompt('I know you are getting tired of this, but I need you to guess a number between 1 and 10. You get 4 guesses to get it right.');
checkGuess(guess6, answer6);

bakedGoods();

tally(count);

function question1(answer1) {
  if (answer1 === 'yes' || answer1 === 'y') {
    alert('Thats correct! I\'ve lived in 7 States. Florida, Illinois, Maryland, New York, Rhode Island, Boston & Washinton.');
    count = count + 1;
  }
  else if (answer1 === 'no' || answer1 === 'n') {
    alert('I\'ve lived in 7 States. Florida, Illinois, Maryland, New York, Rhode Island, Boston & Washinton.');
  }
  else {
    alert('Thats not a valid answer.');
  }
}

function question2(answer2) {
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Absolutely not that\'s terrifying.');
  }
  else if (answer2 === 'no' || answer2 === 'n') {
    alert('I see you also like two feet on the ground. Good choice');
    count = count + 1;
  }
  else {
    alert('Thats not a valid answer.');
  }
}

function question3(answer3) {
  if (answer3 === 'yes' || answer3 === 'y') {
    alert('I am currently working on it, but I\'m not published yet, I\'ll let you know when my fantasy novel is complete and up.');
  }
  else if (answer3 === 'no' || answer3 === 'n') {
    alert('Good Guess! I am currently working on it, but I\'m not published yet, I\'ll let you know when my fantasy novel is complete and up.');
    count = count + 1;
  }
  else {
    alert('Thats not a valid answer.');
  }
}

function question4(answer4) {
  if (answer4 === 'yes' || answer4 === 'y') {
    alert('I actually have, I took a few classes at South Seattle College during the pandemic. Great guess!');
    count = count + 1;
  }
  else if (answer4 === 'no' || answer4 === 'n') {
    alert('Good guess, but I actually have, I took a few classes at South Seattle College during the pandemic.');
  }
  else {
    alert('Thats not a valid answer.');
  }
}

function question5(answer5) {
  if (answer5 === 'yes' || answer5 === 'y') {
    alert('I have almost always lived by the water but I actually got married at the base of Mt Tahoma(Mt Rainier) in the woods.');
  }
  else if (answer5 === 'no' || answer5 === 'n') {
    alert('Great guess, I got married at the base of Mt Tahoma(Mt Rainier) in the woods.');
    count = count + 1;
  }
  else {
    alert('Thats not a valid answer.');
  }
}

function checkGuess(guess, answer6) {
  while (guessCount < 4) {
    if (guess < answer6) {
      guessCount++;
      guess6 = prompt('Sorry That is a little low, Try again. You have ' + (4 - guessCount) + ' guesses left');
      checkGuess(guess6, answer6);
    }
    else if (guess > answer6) {
      guessCount++;
      guess6 = prompt('Sorry That is a little high, Try again. You have ' + (4 - guessCount) + ' guesses left');
      checkGuess(guess6, answer6);
    }
    else {
      guessCount++;
      alert('Congrats you guessed the correct number, it was ' + answer6 + ' and it only took you ' + guessCount + ' guesses.');
      guessCount = 4;
      count++;
    }
  }
}

function askAgain(entry) {
  while (!entry) {
    entry = prompt('Let\'s try that again? Shall we?');
  }
  return entry;
}

// Look at this and think about a while loop or why this one isn't scanning through.
//


//END HERE**************************

//Searches through array to find correct answer and returns valid answer
function bakedGoods() {
  let favoriteBakedGoods = ['chocolate chip cookies', 'doughnuts', 'creme brulee', 'tiramisu', 'almond croissant'];
  let answer7valid = false;
  let q7guess = 7;

  while (!answer7valid && q7guess > 0) {
    let answer7 = prompt('Can you guess what some of my favorite baked goods are?').toLowerCase();
    console.log(`Q6 answer ${answer7}`);
    //This is for checking if the answer is inside the array
    //This part of the for loop checks through the array while the while loop above has a limit of 7
    for (let i = 0; i < favoriteBakedGoods.length; i++) {
      if (answer7 === favoriteBakedGoods[i]) {
        answer7valid = true;
      }
    }
    q7guess--;
    if (!answer7valid) {
      alert('That\'s not one of them, but good guess. You have ' + q7guess + ' guesses left');
      if (q7guess === 0) {
        alert(`Sorry you didn't guess it correctly, I like these baked goods: ${favoriteBakedGoods}`);
      }
    }
    else if (answer7valid) {
      count++;
      alert(`You guessed it correctly! It only took you ${q7guess} guesses. My whole list of favorite baked goods are ${favoriteBakedGoods}`);
    }
  }
}

function tally(count) {
  let questionTotal = 7;
  //Count tally
  if (count >= 4) {
    alert('Great job on the Quiz ' + userName + '! You got ' + count + '/' + questionTotal + '!');
  }
  else if (count === 3) {
    alert('Nice job on the Quiz ' + userName + ', you got ' + count + '/' + questionTotal + '!');
  }
  else if (count === 1 || count === 2) {
    alert('You didn\'t do so well on the Quiz ' + userName + ', you got ' + count + '/' + questionTotal + '.');
  }
  else {
    alert('Well a ' + count + '/' + questionTotal + ', I\'m not even mad ' + userName + '!, I\'m impressed');
  }
}

// Stack Overflow helped with building this
const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/7008');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    audio.play();
  });
});
