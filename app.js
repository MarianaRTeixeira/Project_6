// Add needed variables
const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
const ul  = phrase.firstElementChild; //to return all the nodes
const startBtn = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
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
const getRandomPhraseAsArray = (arr) => {
    let randomPhrase = Math.floor((Math.random() * arrPhrases.lenght));
    return arr[randomPhrase];
};

//adds the letters of a string to the display
const addPhraseToDispaly = arr => {};


//check if a etter is the place
const checkLetter = button => {};

//check if the game has been won or lost
const checkWin = () => {};

//listen for the start game button to be pressed
startButton.addEventListener('click', () => { 

});

//listen for the onscreen Keyboard to be clicked
querty.addEventListener('click', e => {
    
});
