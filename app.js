// Add needed variables
const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
const ul = phrase.querySelector('ul')
let score = 0


//Add some extra text in the first page
const startPhrase = document.getElementById('overlay');
const startText = document.createTextNode('Are you ready?');
startPhrase.appendChild(startText);

//Attach an event listener to the “Start Game” button to hide the start
startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Create an array named phrases
const arrPhrases = [
    'Iron Man',
    'Captain America The First Avenger',
    'Guardians of the Galaxy',
    'The Incredible Hulk',
    'Avengers EndGame',
    'Doctor Stange',
    'Black Panther',
    'SpiderMan',
    'Black Widow',
    'Captain Marvel'
]
 
//return a random phrase from an array
function getRandomPhraseAsArray (arr) {
    let randomPhrase = Math.floor((Math.random() * arrPhrases.lenght));
    return arr;
};

let randomPhrase = getRandomPhraseAsArray(arrPhrases); 


//adds the letters of a string to the display
function addPhraseToDispaly (arr){
    //add li to the ul
    for (let i = 0; i < arr.length; i++) {
        
        let list = document.createElement('li');
        list.textContent = arr[i];
        ul.appendChild(list);
            if( arr === ' '){
            list.className = 'space';
            } else {
            list.className = 'letter';
            }
    }
};
let displayPhrase = getRandomPhraseAsArray();
addPhraseToDispaly(randomPhrase);


/*

// //check if a etter is the place
// const checkLetter = button => {};

// //check if the game has been won or lost
// const checkWin = () => {};

// //listen for the start game button to be pressed
// startButton.addEventListener('click', () => { 

// });

// //listen for the onscreen Keyboard to be clicked
// querty.addEventListener('click', e => {

// });
*/