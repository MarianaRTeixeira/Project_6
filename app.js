// Add needed variables
const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');




//Add some extra text in the first page
const startPhrase = document.getElementById('overlay');
const startText = document.createTextNode('Are you ready?');
startPhrase.appendChild(startText);

//Attach an event listener to the “Start Game” button to hide the start
startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});


//Create an array named phrases
const namedPhrases = [
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
 
// create an list 
function list (text) {
    const li = document.createElement('li');
    li.textContent = text;
    URL.appendChild(li);
}

//Create a getRandomPhraseAsArray function.

/*function game (){
const gamePhrase = Math.floor((Math.random() * namedPhrases.length));
document.getElementById('phrase').innerHTML = namedPhrases[i];*/









//Create a checkLetter function

//Add an event listener to the keyboard

//Create a checkWin function

