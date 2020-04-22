window.addEventListener('load', init);

// globals

let time = 5;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#Word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
];

// initialize game
function init() {
    //load word from array
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input', startMatch);
    //call countdown every second
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);

    //startMatch
    function startMatch() {
        if (matchWords() {

            })
    }
}

//pick & show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    // output random word
    currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
    //Make sure timer is not run out
    if (time > 0) {
        //decrement
        time--;
    } else if (time === 0) {
        // game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
    }
}