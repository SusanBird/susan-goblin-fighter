// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const goblinListEl = document.querySelector('.goblins');
const defeatedNumberEl = document.getElementById('defeated-number');
const playerHpEL = document.getElementById('player-hp');
const formEl = document.querySelector('form');
const playerImgEl = document.getElementById('player-img');

//console.log(formEl, goblinListEl, defeatedNumberEl, playerHpEL);

// let state
let playerHP = 10;
let defeatedGoblinsNumber = 0;
let goblins = [
    { name: 'Dirk', hp: 4 },
    { name: 'Spud', hp: 7 },
];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // create new goblin form 
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    //alert('submitted form!');
    // const newGoblin = {
    //     name: 'Hank',
    //     hp: 2,
    // };

    // get user input from form
    const data = new FormData(formEl);

    const goblinName = data.get('goblin-name');

    // new gobject with user input
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 10),
    };

    goblins.unshift(newGoblin);

    //console.log(goblins);
    //formEl.reset();

    displayGoblins();
});

function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {
        
                if (Math.random() < .33) {
                    goblin.hp--;
                    alert('you hit ' + goblin.name);
                } else {
                    alert('you tried to hit ' + goblin.name + ' but missed');
                }

                if (Math.random() < .25) {
                    playerHP--;
                    alert(goblin.name + ' hit you!');
                } else {
                    alert(goblin.name + ' tried to hit you but missed!');
                }

                if (goblin.hp === 0) {
                    defeatedGoblinsNumber++;
                }

                if (playerHP === 0) {
                    playerImgEl.classList.add('game-over');
                    alert('GAME OVER!!!');
                }

                playerHpEL.textContent = playerHP;
                defeatedNumberEl.textContent = defeatedGoblinsNumber;

                displayGoblins();
            });
            goblinListEl.append(goblinEl);
        }
    }
}




displayGoblins();

