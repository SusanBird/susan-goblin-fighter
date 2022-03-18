// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const goblinListEl = document.querySelector('.goblins');
const defeatedNumberEl = document.getElementById('defeated-number');
const playerHpEL = document.getElementById('player-hp');
const formEl = document.querySelector('form');
const playerImgEl = document.getElementById('player-img');

//console.log(formEl, goblinListEl, defeatedNumberEl, playerHpEL);

// let state
let playerHpEL = 10;
let defeatedNumberEl = 0;
let goblins = [
    { name: 'Dirk', hp: 4 },
    { name: 'Spud', hp: 7 },
];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // create new goblin form 
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('submitted form!');

    formEl.reset();
  });
