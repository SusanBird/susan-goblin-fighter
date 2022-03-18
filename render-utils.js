export function renderGoblin(goblinData) {

    const goblinEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const imgEl = document.createElement('img');
    //const hangryEL = document.createElement('img')

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = `${goblinData.hp}`;
    imgEl.src = `assets/goblin-${1}.png`;
    //imgEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';

    //hangryEL.src = `assets/goblin-1.png`;

    // let goblinEmoji = '';

    // if (goblinData.hp === 3) {
    //     goblinEmoji = hangryEL.src ;
    // } else if (goblinData.hp === 1 || goblinData.hp === 2) {
    //     goblinEmoji = '😈';
    // } else if (goblinData.hp < 1) {
    //     goblinEmoji = '🔥';
    //}

    if (goblinData.hp < 0) { 
        goblinEl.classList.add('dead');
    }

    goblinEl.append(nameEl, hpEl);

    return goblinEl;
}