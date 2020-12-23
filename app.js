// Add needed variables
const querty = document.querySelector('#querty');
const phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul');
const startBtn = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
const button = document.querySelector('button');
const hearts = document.querySelectorAll('.tries img');
let missed = 0;
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

function getRandomPhraseAsArray(arr) {
    let nPhrase = Math.floor((Math.random() * arr.length));
    return nPhrase;
};

let nPhrase = getRandomPhraseAsArray(arrPhrases);

function addPhraseToDispaly(arr){
    for (let i = 0; i < arr.length; i++) {
        let list = document.createElement('li');
        list.textContent = arr[i];
        ul.appendChild(list);
            if( arr[i] === ' '){
                list.className = 'space';
            } else {
                list.className = 'letter';
                // Debug
                //console.log(list);
            }
    }
};

addPhraseToDispaly(arrPhrases[nPhrase]);

// //check if a Letter is the place
function checkLetter(btn) {
    let check = document.getElementsByClassName('letter');
    let match = null;

    for (i = 0; i < check.length; i++) {
        // if(btn.textContent.toLowerCase() === check[i].textContent.toLowerCase()) {
        if(btn.textContent.toLowerCase() === check[i].textContent.toLowerCase()) {
            check[i].className = 'show';
            //match = check[i].textContent.toLowerCase();
            // Debug
            //console.log(match);
        } 
    }
    return 'ok'; //match;  
}

// //listen for the onscreen Keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    if(e.target.tagName == 'BUTTON'){
        e.target.className = 'chosen';
        e.target.disable = true;
    } else  { 
        alert('Please choose a letter');
    }
    let btnCheck = checkLetter(e.target);
    if (btnCheck === 'null'){
        
     
        missed += 1;
        hearts[missed].src ="images/lostHeart.png";
    }
   // checkWin();  
}); 


// //check if the game has been won or lost

//function  checkWin = () => {};

// //listen for the start game button to be pressed
// startButton.addEventListener('click', () => { 

// });

// //listen for the onscreen Keyboard to be clicked
// querty.addEventListener('click', e => {

// });
